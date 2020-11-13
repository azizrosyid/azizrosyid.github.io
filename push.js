const webPush = require("web-push");

const vapidKeys = {
  publicKey:
    "BH-tz5CdbvJ3Ucmxv7fq0nw5t63sdSUfBsytlDS7bBthp273Cbc3z5B2LbCeQhb8fNYy294PnJiX8F1H7-7yBBk",
  privateKey: "7MJoQ1Df4cWaE9Qp6cote_eMgL7iALgm_Wwtgs__pKo",
};

const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cav00LGWbM4:APA91bGIt_o2GdodgkuSUOG6UEp6BfLlL_JeRHrq3Iscifb2OS4ugHPueDVebDmKmyzfSSncQFqmACcNpKyRVwV-cHNqTl5-_qUa-NY_VJlJwOwdNFt361SQTcQ_JkGBGKS0WuJ6NkJ2",
  keys: {
    p256dh:
      "BGIKeVrsbl6aTYToFwEeANJnimh2QjpbaM/j+hZ/4g/jOSdD8rSzIqYeiuVKmc+1MEejHwG8R9wpD8r0B6uVohM=",
    auth: "OpLjYqsRKuaw6vQdlhwl2Q==",
  },
};

webPush.setVapidDetails(
  "mailto:example@example.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const payload = "Notification Push From Web Push!";

const options = {
  gcmAPIKey: "290871267254",
  TTL: 60,
};

webPush.sendNotification(pushSubscription, payload, options);
