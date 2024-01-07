function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
          console.log('Notification permission granted.');
      } else {
          console.log("Didn't give permission");
      }
  });
}
requestPermission();