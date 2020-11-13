if (!("serviceWorker" in navigator)) {
  console.log("Service worker tidak didukung browser ini.");
} else {
  registerServiceWorker();
  requestPermission();
}
// Register service worker
function registerServiceWorker() {
  return navigator.serviceWorker
    .register("/service-worker.js")
    .then(function (registration) {
      console.log("Registrasi service worker berhasil.");
      return registration;
    })
    .catch(function (err) {
      console.log("Registrasi service worker gagal.", err);
    });
}
function requestPermission() {
  navigator.serviceWorker.ready.then(function () {
    if ("Notification" in window) {
      Notification.requestPermission().then(function (result) {
        if (result === "denied") {
          console.log("Fitur notifikasi tidak diijinkan.");
          return;
        } else if (result === "default") {
          console.error("Pengguna menutup kotak dialog permintaan ijin.");
          return;
        }

        if ("PushManager" in window) {
          const vapidKeys = {
            publicKey:
              "BH-tz5CdbvJ3Ucmxv7fq0nw5t63sdSUfBsytlDS7bBthp273Cbc3z5B2LbCeQhb8fNYy294PnJiX8F1H7-7yBBk",
            privateKey: "7MJoQ1Df4cWaE9Qp6cote_eMgL7iALgm_Wwtgs__pKo",
          };
          navigator.serviceWorker
            .getRegistration()
            .then(function (registration) {
              registration.pushManager
                .subscribe({
                  userVisibleOnly: true,
                  applicationServerKey: urlBase64ToUint8Array(
                    vapidKeys.publicKey
                  ),
                })
                .then(function (subscribe) {
                  console.log(
                    "Berhasil melakukan subscribe dengan endpoint: ",
                    subscribe.endpoint
                  );
                  console.log(
                    "Berhasil melakukan subscribe dengan p256dh key: ",
                    btoa(
                      String.fromCharCode.apply(
                        null,
                        new Uint8Array(subscribe.getKey("p256dh"))
                      )
                    )
                  );
                  console.log(
                    "Berhasil melakukan subscribe dengan auth key: ",
                    btoa(
                      String.fromCharCode.apply(
                        null,
                        new Uint8Array(subscribe.getKey("auth"))
                      )
                    )
                  );
                })
                .catch(function (e) {
                  console.error("Tidak dapat melakukan subscribe ", e.message);
                  console.log(e);
                });
            });
        }
      });
    }
  });
}
