
import { h } from "vue";
import PdfjsWorker from "pdfjs-dist/build/pdf.worker.js?worker";
import './viewer.css';
const id = 'vue-pdf3-' + Math.ceil(Math.random() * 10000000000);

export default {
  name: "VuePdf3",
  props: {
    url: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return () => h('div', {
      id: id,
      class: 'vue-pdf3',
      ref: 'pdf'
    })
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      const PDFJS = await import("pdfjs-dist/build/pdf.js");
      const source = { url: this.url };
      if (typeof window !== "undefined" && "Worker" in window) {
        PDFJS.GlobalWorkerOptions.workerPort = new PdfjsWorker();
      }
      let loadingTask = PDFJS.getDocument(source);
      loadingTask.__PDFDocumentLoadingTask = true;

      loadingTask.promise.then((pdf) => {
        let pdfPages = pdf.numPages;
        for (let i = 1; i <= pdfPages; i++) {
          pdf.getPage(i).then((page) => {
            let pixelRatio = 3;
            let viewport = page.getViewport({ scale: 1 });
            let divPage = window.document.createElement("div");
            let loading = window.document.createElement("div");
            loading.className = "loading";
            divPage.appendChild(loading);
            let canvas = divPage.appendChild(window.document.createElement("canvas"));
            divPage.className = "page";
            this.$refs.pdf.appendChild(divPage);
            canvas.width = viewport.width * pixelRatio;
            canvas.height = viewport.height * pixelRatio;
            let renderContext = {
              canvasContext: canvas.getContext("2d"),
              viewport: viewport,
              transform: [pixelRatio, 0, 0, pixelRatio, 0, 0],
            };
            page.render(renderContext).promise.then(() => {
              divPage.className = "page complete";
            }).catch(() => {

            });
          });
        }
      });
    }
  }
}


