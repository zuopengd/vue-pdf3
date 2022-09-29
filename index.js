
import { h } from "vue";
import PdfjsWorker from "pdfjs-dist/build/pdf.worker.js?worker";
import './index.css';
const id = 'vue-pdf3-' + Math.ceil(Math.random() * 10000000000);

export default {
  name:"VuePdf3",
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
      if (
        typeof window !== "undefined" &&
        "Worker" in window &&
        navigator.appVersion.indexOf("MSIE 10") === -1
      ) {
        PDFJS.GlobalWorkerOptions.workerPort = new PdfjsWorker();
      }
      var loadingTask = PDFJS.getDocument(source);
      loadingTask.__PDFDocumentLoadingTask = true;

      loadingTask.promise.then((pdf) => {
        var pdfPages = pdf.numPages;
        for (var i = 1; i <= pdfPages; i++) {
          pdf.getPage(i).then((page) => {
            var pixelRatio = 3;
            var viewport = page.getViewport({ scale: 1 });
            var canvas = this.$refs.pdf.appendChild(window.document.createElement("canvas"));
            canvas.className = "page";
            canvas.width = viewport.width * pixelRatio;
            canvas.height = viewport.height * pixelRatio;
            var renderContext = {
              canvasContext: canvas.getContext("2d"),
              viewport: viewport,
              transform: [pixelRatio, 0, 0, pixelRatio, 0, 0],
            };
            page.render(renderContext);
          });
        }
      });
    }
  }
}


