let html5QrCode;

function startScanner() {
  const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    document.getElementById("result").textContent = `Resultado: ${decodedText}`;
    stopScanner(); // Para automaticamente após leitura bem-sucedida
  };

  const config = { fps: 10, qrbox: 250 };

  html5QrCode = new Html5Qrcode("reader");
  html5QrCode
    .start(
      { facingMode: "environment" }, // Usa a câmera traseira
      config,
      qrCodeSuccessCallback
    )
    .catch((err) => {
      document.getElementById("result").textContent = `Erro: ${err}`;
    });
}

function stopScanner() {
  if (html5QrCode) {
    html5QrCode.stop().then(() => {
      console.log("Scanner parado");
    });
  }
}

// Inicializar scanner automaticamente ao carregar
startScanner();
