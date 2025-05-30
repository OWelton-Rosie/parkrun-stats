function copyToClipboard() {
    const text = document.getElementById('output').innerText;
    const copyBtn = document.getElementById('copyBtn');
    if (text.trim()) {
      navigator.clipboard.writeText(text).then(() => {
        const originalText = copyBtn.innerText;
        copyBtn.innerText = 'Copied!';
        copyBtn.disabled = true;
        setTimeout(() => {
          copyBtn.innerText = originalText;
          copyBtn.disabled = false;
        }, 2000); // 2 seconds before reverting
      });
    }
  }
  