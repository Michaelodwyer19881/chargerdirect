import { useEffect, useState } from 'react';

export default function Apps() {
  const [appLive] = useState(false); // set true when ready

  const IOS_APP_STORE_URL = 'https://apps.apple.com/app/idYOUR_APP_ID';
  const ANDROID_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME';

  useEffect(() => {
    if (!appLive) return;

    const ua = navigator.userAgent || navigator.vendor;

    if (/iPad|iPhone|iPod/.test(ua)) {
      window.location.href = IOS_APP_STORE_URL;
    } else if (/android/i.test(ua)) {
      window.location.href = ANDROID_PLAY_STORE_URL;
    }
  }, [appLive]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Charger Direct App</h1>
        {!appLive ? (
          <>
            <p className="text-gray-600 mb-6 text-lg">
              🚀 Our mobile app is coming soon. Scan this QR again when it's ready!
            </p>
            <p className="text-gray-400">Available on iOS and Android.</p>
          </>
        ) : (
          <p className="text-gray-700 text-lg">Redirecting you to the app store…</p>
        )}
        {!appLive && (
          <div className="mt-8 flex justify-center gap-4">
            <a
              href={IOS_APP_STORE_URL}
              className="bg-blue-500 text-white px-6 py-2 rounded-full shadow hover:bg-blue-600 transition"
            >
              App Store
            </a>
            <a
              href={ANDROID_PLAY_STORE_URL}
              className="bg-green-500 text-white px-6 py-2 rounded-full shadow hover:bg-green-600 transition"
            >
              Google Play
            </a>
          </div>
        )}
      </div>
    </div>
  );
}