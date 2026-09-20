// firebase-init.js
// ============================================================
// عدّل القيم أدناه بمعلومات مشروعك في Firebase.
// كيف تحصل عليها: اذهب إلى https://console.firebase.google.com
// أنشئ مشروع جديد (مجاني) -> من الإعدادات (⚙️ Project settings)
// -> Your apps -> Add app -> Web -> انسخ القيم إلى هنا.
// شرح الخطوات كاملة موجود في ملف README.md
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getFirestore,
  connectFirestoreEmulator,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAa-vXSK38CDQEBssKrmEmxBd17I7QSX2Q",
  authDomain: "karawan-taxi.firebaseapp.com",
  projectId: "karawan-taxi",
  storageBucket: "karawan-taxi.firebasestorage.app",
  messagingSenderId: "877223956181",
  appId: "1:877223956181:web:9bb007b2d465d137e99c5c",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// اسم الشركة ورقم هاتفها اللي يظهر بالتطبيق (يمكن تعديله لاحقًا من إعدادات لوحة التحكم أيضًا)
export const DEFAULT_COMPANY = {
  name: "كاروان",
  phone: "32053207",
};
