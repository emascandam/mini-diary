import { Translations } from "../../../shared/types";

const translationsEn: Translations = {
	// Menu (defined by macOS)
	"about-app": "عن {appName}",
	"bring-all-to-front": "إحضار الكل إلى الواجهة",
	close: "إغلاق",
	copy: "نسخ",
	cut: "قص",
	edit: "تعديل",
	file: "ملف",
	help: "مساعدة",
	"hide-app": "إخفاء {appName}",
	"hide-others": "إخفاء الآخرين",
	minimize: "تصغير",
	paste: "لصق",
	preferences: "التفضيلات",
	"quit-app": "إغلاق {appName}",
	redo: "إلغاء التراجع",
	"select-all": "تحديد الكل",
	"show-all": "إظهار الكل",
	speech: "تحدث",
	"start-speaking": "بدء التحدث",
	"stop-speaking": "إنهاء التحدث",
	undo: "تراجع",
	view: "عرض",
	window: "النافذة",
	zoom: "زوم",

	// Menu (app-specific)
	export: "تصدير",
	"export-to-format": "تصدير إلى {format}",
	"go-to-date": "اذهب إلى تاريخ",
	"go-to-today": "اذهب إلى اليوم",
	import: "استيراد",
	"import-from-format": "استيراد من {format}",
	license: "الرخصة",
	"lock-diary": "قفل المذكرة",
	"next-day": "اليوم التالي",
	"next-month": "الشهر التالي",
	"previous-day": "اليوم السابق",
	"previous-month": "الشهر السابق",
	"privacy-policy": "سياسة الخصوصية",
	statistics: "إحصاءات",
	website: "موقع الإنترنت",

	// Weekdays
	sunday: "الأحد",
	monday: "الإثنين",
	tuesday: "الثلاثاء",
	wednesday: "الأربعاء",
	thursday: "الخميس",
	friday: "الجمعة",
	saturday: "السبت",

	// Theme
	dark: "داكن",
	light: "ساطع",
	theme: "الثيم",

	// Calendar
	today: "اليوم",

	// Editor
	"add-a-title": "إضافة عنوان",
	bold: "غامق",
	bullets: "نقاط",
	italic: "مائل",
	list: "قائمة",
	"write-something": "اكتب شيئًا",

	// Search
	clear: "محو",
	"no-results": "لا نتائج",
	"no-title": "لا عنوان",
	search: "بحث",

	// Preferences
	"allow-future-entries": "السماح بالمدخلات المستقبلية",
	auto: "تلقائي",
	"diary-entries": "مدخلات المذكرة",
	"enable-spellcheck": "تحقق إملائي",
	"first-day-of-week": "أول يوم في الأسبوع",
	"hide-titles": "إخفاء العناوين",
	no: "لا",
	ok: "OK",
	"reset-diary": "إعادة تعيين المذكرة",
	"reset-diary-confirm": "نعم، أنا متأكد",
	"reset-diary-msg":
		"هل أنت متأكد(ة) بأنك تريد(ين) إعادة تعيين المذكرة؟ سيحذف هذا كل المحتويات. البيانات لا يُمكن استرجاعها"
		"Are you sure you want to reset your diary? This will delete all of your content. The data cannot be restored.",

	// Password and directory
	"change-directory": "تغيير المسار",
	"change-password": "تغيير الباسوورد",
	"choose-password": "يرجى اختيار باسوورد للمذكرة",
	"decryption-error": "خطأ أثناء إلغاء تشفير ملف المذكرة",
	"diary-file": "ملف المذكرة",
	"file-exists": "يتواجد ملف آخر في المسار",
	"move-error-msg": "حدث خطأ أثناء نقل الملف",
	"move-error-title": "خطأ في النقل",
	"move-file": "نقل الملف",
	"new-password": "باسوورد جديد",
	password: "باسوورد",
	"passwords-no-match": "الباسوردَيْن لا يتطابقان",
	"repeat-new-password": "إعادة إدخال الباسوورد الجديد",
	"repeat-password": "إعادة إدخال الباسوورد",
	"select-directory": "اختيار مسار",
	"set-password": "تطبيق الباسوورد",
	unlock: "فتح القفل",
	"wrong-password": "باسوورد خاطئ",

	// Statistics
	"total-entries": "عدد المدخلات الكلي",
	"entries-per-week": "مدخلات كل أسبوع",
	"streak-best": "مدخلات متتالية (أعلى رقم)",
	"streak-current": "مدخلات متتالية (الرقم الحالي)",
	"total-words": "عدد الكلمات",
	"words-per-entry": "كلمات كل مدخلة",

	// Import
	"import-error-msg": "حدث خطأ أثناء الاستيراد",
	"import-error-title": "خطأ استيراد",
	"import-instructions-day-one":
		"افتح(ي) برنامج Day One واستورد(ي) مذكرتك تحت ملف (File) → تصدير (Export) → {format}. فك(ي) الضغط عن الملف المُنشأ. حدد(ي) ملف الـ{format} الناتج في الخطوة التالية لاستيراده لـ{appName}.",
	"import-instructions-jrnl":
		"لتصدير مفكرة الـjrnl الخاصة لك, شغل(ي) أمر {command}. حدد(ي) ملف الـJSON المُنشأ في الخطوة التالية لاستيراده إلى {appName}.",
	"import-instructions-mini-diary":
		"يمكنك استيراد بياناتك من ملف JSON لبرنامج {appName} مُصدَّر مًسبقًا أو من ملف JSON آخر مُصاغ بطريقة مُشابهة.",
	"start-import": "بدء الاستيراد",

	// Export
	"export-error-msg": "حدث خطأ أثناء التصدير",
	"export-error-title": "خطأ تصدير",

	// Other
	loading: "جاري التحميل",
};

export default translationsAr;