const availableLocales = JSON.parse('\x5b\x22en\x22, \x22am\x22, \x22ar\x22, \x22bn\x22, \x22bg\x22, \x22ca\x22, \x22cs\x22, \x22cy\x22, \x22da\x22, \x22de\x22, \x22el\x22, \x22en_GB\x22, \x22es\x22, \x22es_419\x22, \x22et\x22, \x22eu\x22, \x22fa\x22, \x22fi\x22, \x22fil\x22, \x22fr\x22, \x22gl\x22, \x22gu\x22, \x22hi\x22, \x22hr\x22, \x22hu\x22, \x22id\x22, \x22is\x22, \x22it\x22, \x22iw\x22, \x22ja\x22, \x22kn\x22, \x22ko\x22, \x22lt\x22, \x22lv\x22, \x22ml\x22, \x22ms\x22, \x22my\x22, \x22nl\x22, \x22no\x22, \x22pl\x22, \x22pt_BR\x22, \x22pt_PT\x22, \x22ro\x22, \x22ru\x22, \x22sk\x22, \x22sl\x22, \x22sr\x22, \x22sv\x22, \x22sw\x22, \x22ta\x22, \x22te\x22, \x22th\x22, \x22tr\x22, \x22uk\x22, \x22ur\x22, \x22vi\x22, \x22zh_CN\x22, \x22zh_TW\x22, \x22zu\x22\x5d'); const availableRtlLocales = JSON.parse('\x5b\x22ar\x22, \x22fa\x22, \x22iw\x22, \x22ur\x22\x5d'); const prefix = 'keep_ba-prod'; _notes_flag_initialData = {"n_uo":true,"n_imp":26214400,"n_ton":"keep","n_the":true,"n_ecil":false,"n_wcv":"3.3.0.289","n_lcu":false,"n_casjstm":0,"n_sit":["image/jpeg","image/png","image/gif"],"n_edtt":false,"n_amt":["audio/aac","image/jpeg","image/png","image/gif"],"n_c":"192748556389-k5lj2ak6j74mo13ulslbkqkrd8d6b1bh.apps.googleusercontent.com","n_ccd":[],"n_nmri":5000,"n_deau":"https://www.googleapis.com/","n_ugat":"CLEARCUT","n_uptc":[],"n_ars":"https://www.googleapis.com/auth/reminders","n_tipe":true,"n_afoiu":false,"n_eh":false,"n_tbti":30000,"n_tcur":{},"n_k":"AIzaSyBx4qIYtgGv7SYh3nV8weWhXKZjIcaYKek","n_eod":true,"n_tcu":{},"n_mpau":"https://maps.googleapis.com/maps/api/place/","n_ss":"https://www.googleapis.com/auth/drive,https://www.googleapis.com/auth/peopleapi.readonly","n_pau":"https://people-pa.googleapis.com/","n_taau":"https://taskassist-pa.googleapis.com/","n_eau":false,"n_eliw":false,"n_edmp":false,"n_cp":"CRX_BA","n_ur":"edit","n_scp":false,"n_atas":"https://www.googleapis.com/auth/taskassist.readonly","n_npd":"content-notes-pa.googleapis.com","n_nmb":1800000,"n_detl":false,"n_t":true,"n_hak":"AIzaSyCu0mGMINziM4XKlidxSzycNQUx9qjr48g","n_emv2dm":false,"n_dlis":false,"n_edlh":false,"n_mpak":"AIzaSyCOKFFECsTTlV2-EzQ_MywNsvnYJqDO-5A","n_ecmv3m":true,"n_eil":false,"n_tms":604800,"n_wfp":false,"n_csbs":120,"n_imb":10485760,"n_eoros":false,"n_s":"https://www.googleapis.com/auth/memento","n_dt":"","n_ats":"https://www.googleapis.com/auth/client_channel","n_fpae":"https://keep-pa.googleapis.com","n_ecpde":false,"n_tak":"AIzaSyAqeqEBGxTXZXOnu2gUrYCz9hsfKUr45vU","n_rs":4,"n_cc":"TR, LB, AN, NC, MI, SH, SNB, DR","n_ecs":false,"n_oe":true,"n_npv":"v1","n_nib":5000,"n_ep":true,"n_castg":"CANARY_TYPE_NONE","n_rau":"https://reminders-pa.googleapis.com/"};
const langSynonyms = {
  'he': 'iw',
}
let locale = window.navigator.language;
if (langSynonyms[locale]) {
  locale = langSynonyms[locale];
}

const direction = availableRtlLocales.indexOf(locale) >= 0 ? 'rtl' : 'ltr';

const jsFileName = prefix + '_app_script_' + direction + '.js';
const jsEl = document.createElement('script');
jsEl.setAttribute('type', 'text/javascript');
jsEl.setAttribute('src', jsFileName);

const cssFileName = prefix + '_app_styles_' + direction + '_default.css';
const cssEl = document.createElement('link');
cssEl.setAttribute('rel', 'stylesheet');
cssEl.setAttribute('href', cssFileName);

const symbolsFileName = availableLocales.indexOf(locale) >= 0 ? locale : 'en';
const symbolsEl = document.createElement('script');
symbolsEl.setAttribute('type', 'text/javascript');
symbolsEl.setAttribute('src', 'i18n/symbols_' + symbolsFileName + '.js');

const head = document.getElementsByTagName('head')[0];
head.appendChild(symbolsEl);
head.appendChild(cssEl);
head.appendChild(jsEl);

jsEl.onload = function() {
  initNotesBrowserAction();
};
