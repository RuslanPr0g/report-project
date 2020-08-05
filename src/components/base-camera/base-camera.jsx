/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import React, { useRef, useEffect, useState } from 'react'
import * as styles from './base-camera.module.css'
import * as facemesh from '@tensorflow-models/facemesh'
import * as tf from '@tensorflow/tfjs-core'
import * as tfjsWasm from '@tensorflow/tfjs-backend-wasm'
import { version } from '@tensorflow/tfjs-backend-wasm/dist/version'
import { lang } from '../../assets/lang'
import { ScatterGL } from 'scatter-gl'
import BaseButton from '../base-button/base-button'

tfjsWasm.setWasmPath(
  `https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm@${version}/dist/tfjs-backend-wasm.wasm`
)

const BaseCamera = ({ onCapture }) => {
  const NO_ACCESS_ERROR = lang.camera.noAccess
  const cam = useRef(null)
  const video = useRef(null)
  const [isCameraInited, setIsCameraInited] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const capture = () => {
    const videoElement = video.current

    const canvas = document.createElement("canvas")
    canvas.width = videoElement.videoWidth
    canvas.height = videoElement.videoHeight
    canvas.getContext('2d')
      .drawImage(videoElement, 0, 0, canvas.width, canvas.height)

    const dataURL = canvas.toDataURL()

    onCapture(dataURL)
  }

  useEffect(() => {
    let model, ctx, videoWidth, videoHeight, video, canvas, stream, scatterGL,
     scatterGLHasInitialized = false

    const state = {
      backend: 'wasm',
      maxFaces: 1,
      renderPointcloud: true,
    }

    const setupCamera = async () => {
      video = document.getElementById('js-face-mesh-original')

      stream = await navigator.mediaDevices.getUserMedia({
        'audio': false,
        'video': {
          facingMode: 'user',
          width: 700,
          height: 500,
        },
      }).catch(() => {
        throw NO_ACCESS_ERROR
      })

      video.srcObject = stream

      return new Promise((resolve) => {
        video.onloadedmetadata = () => {
          resolve(video)
        }
      })
    }

    const renderPrediction = async () => {
      if (model) {
        const predictions = await model.estimateFaces(video)

        if (ctx) {
          ctx.drawImage(video, 0, 0, videoWidth, videoHeight, 0, 0, canvas.width, canvas.height)

          if (predictions.length > 0) {
            predictions.forEach((prediction) => {
              const keypoints = prediction.scaledMesh

              for (let i = 0; i < keypoints.length; i++) {
                const x = keypoints[i][0]
                const y = keypoints[i][1]

                ctx.beginPath()
                ctx.arc(x, y, 1 /* radius */, 0, 2 * Math.PI)
                ctx.fill()
              }
            })

            const pointsData = predictions.map(prediction => {
              let scaledMesh = prediction.scaledMesh
              return scaledMesh.map(point => ([-point[0], -point[1], -point[2]]))
            })

            let flattenedPointsData = []
            for (let i = 0; i < pointsData.length; i++) {
              flattenedPointsData = flattenedPointsData.concat(pointsData[i])
            }

            if (scatterGL) {
              const pointsData = predictions.map(prediction => {
                let scaledMesh = prediction.scaledMesh;
                return scaledMesh.map(point => ([-point[0], -point[1], -point[2]]));
              });

              let flattenedPointsData = [];

              for (let i = 0; i < pointsData.length; i++) {
                flattenedPointsData = flattenedPointsData.concat(pointsData[i]);
              }

              const dataset = new ScatterGL.Dataset(flattenedPointsData);

              if (!scatterGLHasInitialized) {
                scatterGL.render(dataset);
              } else {
                scatterGL.updateDataset(dataset);
              }

              scatterGLHasInitialized = true;
            }

          }
        }

        requestAnimationFrame(renderPrediction)
      }
    }

    const initFacMeshCanvas = async () => {
      await tf.setBackend(state.backend)

      await setupCamera().catch((error) => {
        throw error
      })
      video.play()
      videoWidth = video.videoWidth
      videoHeight = video.videoHeight
      video.width = videoWidth
      video.height = videoHeight

      canvas = document.getElementById('js-face-mesh-output')
      canvas.width = videoWidth
      canvas.height = videoHeight

      ctx = canvas.getContext('2d')
      ctx.translate(canvas.width, 0)
      ctx.scale(-1, 1)
      ctx.fillStyle = '#32EEDB'
      ctx.strokeStyle = '#32EEDB'
      ctx.lineWidth = 0.5

      model = await facemesh.load({ maxFaces: state.maxFaces })
      renderPrediction()

      scatterGL = new ScatterGL(
        document.getElementById('js-scatter-gl-container'),
        { 'rotarteOnStart': false, 'selectEnabled': false });

      return true
    }

    initFacMeshCanvas()
      .then(() => {
        setIsCameraInited(true)
      })
      .catch((error) => {
        setErrorMessage(error)
      })

    return () => {
      stream.getTracks().forEach((track) => {
        track.stop()
      })
    }
  }, [])

  return (
    <div className={styles.cameraWrapper}>
      <video ref={video} id="js-face-mesh-original" style={{ display: 'none' }} />

      <canvas
        className={`${styles.cameraCanvas} ${(isCameraInited) ? styles.inited : ''}`}
        id="js-face-mesh-output"
        ref={cam}
      />

      <div className={styles.scatterGlWrapper} id="js-scatter-gl-container"></div>

      {
        (isCameraInited)
          ? <BaseButton className={styles.buttonCapture} onClick={capture}>Сделать снимок</BaseButton>
          : <p className={styles.cameraLabel}>{errorMessage || lang.camera.initializing}</p>
      }

    </div>
  )
}

export default BaseCamera