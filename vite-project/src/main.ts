import { bootstrapCameraKit } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({
    apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzM2ODY2NDc3LCJzdWIiOiJmMjYyMTQ4Ni1lNTliLTRjMWUtYmVmMS03MzEzYTEzNTUwYjZ-U1RBR0lOR34xZGM5ZDU3ZS1hNTc2LTQ1M2YtOGE5NC04NWZhMGU4ZTgxODYifQ.0cWhHiVSKPv6n3Rkf6i2ESr8ZgX-CgPeMJsXR3imTFw',
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
    '43276710876',
    '1413cfa2-e306-4dd7-ad6a-6548743a74ed'
  );

  await session.applyLens(lens);
})();