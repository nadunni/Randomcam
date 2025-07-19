const pc = new RTCPeerConnection();

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
.then(stream => {
  document.getElementById("local").srcObject = stream;
  stream.getTracks().forEach(track => pc.addTrack(track, stream));
});

pc.ontrack = event => {
  document.getElementById("remote").srcObject = event.streams[0];
};
