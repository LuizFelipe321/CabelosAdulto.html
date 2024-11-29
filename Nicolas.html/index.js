const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => {
  accordion.addEventListener("click", () => {
    
    const panel = accordion.nextElementSibling;
    const arrow = accordion.querySelector(".arrow");

    if (panel.style.display === "block") {
      panel.style.display = "none";
      arrow.textContent = "➔"; 
    } else {
      panel.style.display = "block";
      arrow.textContent = "▼"; 
    }
  });
});

function showModal() {
    document.getElementById('productModal').style.display = "block";
}

function closeModal() {
    document.getElementById('productModal').style.display = "none";
}

function calculateResult() {
    const weeks = document.getElementById('weeks').value;
    const resultMessage = document.getElementById('resultMessage');

    if (weeks && !isNaN(weeks)) {
        let improvement = '';
        if (weeks <= 4) {
            improvement = 'Você está no início do tratamento, e logo começará a ver resultados iniciais!';
        } else if (weeks <= 8) {
            improvement = 'Os resultados começam a se destacar! Seu cabelo está ficando mais forte e volumoso.';
        } else if (weeks <= 12) {
            improvement = 'A calvície está sendo combatida, e novos fios começam a crescer visivelmente.';
        } else {
            improvement = 'Tratamento avançado! Seu cabelo está mais denso, saudável e com brilho natural.';
        }
        resultMessage.innerHTML = `<strong>Após ${weeks} semanas de uso:</strong> ${improvement}`;
    } else {
        resultMessage.innerHTML = 'Por favor, insira um número válido de semanas.';
    }
}

function toggleFAQ(index) {
    const panels = document.getElementsByClassName('panel');
    const accordions = document.getElementsByClassName('accordion-item');

    if (panels[index].style.display === "block") {
        panels[index].style.display = "none";
        accordions[index].querySelector('.arrow').textContent = "➔";
    } else {
        panels[index].style.display = "block";
        accordions[index].querySelector('.arrow').textContent = "▼";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const carousel = new bootstrap.Carousel(document.getElementById('carouselExampleDark'), {
      interval: 3000,  
      ride: 'carousel', 
    });
  });
  
  function toggleFAQ(index) {
    const panels = document.querySelectorAll('.panel');
    const items = document.querySelectorAll('.accordion-item');
  
    if (panels[index].classList.contains('show')) {
      panels[index].classList.remove('show'); 
      items[index].classList.remove('active'); 
    } else {
      panels[index].classList.add('show');     
      items[index].classList.add('active');    
  
   
      panels.forEach((panel, i) => {
        if (i !== index) {
          panel.classList.remove('show');
          items[i].classList.remove('active');
        }
      });
    }
  }
  