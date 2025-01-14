import { bootstrapCameraKit } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({
    apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzMzODM5NzA2LCJzdWIiOiIyOTA2Mzg2MC0yZDI5LTRkMTAtOGIxNi1lZWZmN2RiMWZiZTZ-U1RBR0lOR340NTMxZTljMS1iZmZmLTQ1NTctYjlmMy01ZjM1NjFlMjQ4ZjMifQ.y9J7JnvDfiGgdsNIFhQOOEHScahGHHpG-YTUPBvgm7U',
  });
  const liveRenderTarget = document.getElementById(
    'canvas'
  ) as HTMLCanvasElement;
  const session = await cameraKit.createSession({ liveRenderTarget });
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  await session.setSource(mediaStream);
  await session.play();

  const lens = await cameraKit.lensRepository.loadLens(
    '56014614-d484-49e0-9e98-b088dd104809',
    'ada62e14-f4b0-40e3-9fce-f4d8a3f5d874'
  );

  await session.applyLens(lens);
})();