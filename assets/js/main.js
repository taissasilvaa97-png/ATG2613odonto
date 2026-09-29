/**
 * Aurum Odontologia Premium - Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });

    const closeMobileMenu = () => {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    };

    if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);
    mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
  }

  // 2. Sticky Navbar Glass Effect on Scroll
  const mainHeader = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      mainHeader.classList.add('shadow-md', 'glass-nav');
    } else {
      mainHeader.classList.remove('shadow-md');
    }
  });

  // 3. Specialties Data for Interactive Modal
  const specialtyDetails = {
    lentes: {
      title: "Estética Dental & Lentes em Porcelana",
      badge: "Design Digital do Sorriso",
      desc: "Nossas lentes de contato dentais são confeccionadas artesanalmente em porcelana pura de alta resistência (Dissilicato de Lítio e Feldspática), com espessuras ultrafinas de 0.2mm a 0.5mm. O processo é 100% digital, garantindo preservação máxima do esmalte biológico e uma transparência luminosa idêntica à do dente natural.",
      highlights: [
        "Simulação 3D prévia antes do início (Mockup digital)",
        "Zero desgaste excessivo da estrutura dental",
        "Alta resistência ao manchamento (café, vinho e corantes)",
        "Harmonia óptica e textura idêntica ao esmalte humano"
      ],
      time: "2 a 3 sessões personalizadas"
    },
    alinhadores: {
      title: "Ortodontia Invisível (Alinhadores)",
      badge: "Tecnologia Digital 3D",
      desc: "Tratamento ortodôntico de altíssima precisão com placas transparentes removíveis termoformadas sob medida através de escaneamento intraoral 3D. Esqueça fios metálicos, cortes nas gengivas e manutenções desconfortáveis.",
      highlights: [
        "Totalmente transparentes e imperceptíveis em conversas",
        "Removíveis para alimentação livre e higiene perfeita",
        "Resultados até 50% mais rápidos que aparelhos fixos",
        "Planejamento 3D onde você vê o resultado final antes de começar"
      ],
      time: "Acompanhamento digital flexível"
    },
    implantes: {
      title: "Implantodontia Guiada Avançada",
      badge: "Cirurgia Guiada sem Cortes Extensos",
      desc: "Substituição biológica de elementos perdidos utilizando implantes de titânio ou cerâmica biocompatível importados (tecnologia suíça). O procedimento é planejado por tomografia 3D e guia cirúrgica computorizada para mínimo desconforto e cicatrização acelerada.",
      highlights: [
        "Protocolo Carga Imediata: dentes fixos no mesmo dia (quando indicado)",
        "Cirurgia guiada sem necessidade de incisões amplas",
        "Alta taxa de osseointegração (> 99.2%)",
        "Sedação consciente para pacientes com ansiedade odontológica"
      ],
      time: "Protocolos rápidos e confortáveis"
    },
    harmonizacao: {
      title: "Harmonização Orofacial & Estética Facial",
      badge: "Integração Estética Facial & Dental",
      desc: "A verdadeira beleza do sorriso é valorizada pelo contorno e suporte dos lábios e da face. Realizamos procedimentos orofaciais minimamente invasivos com foco em elegância sutil, bioestimulação de colágeno e restauração de volumes naturais.",
      highlights: [
        "Preenchimento labial sutil e definição de contornos",
        "Toxina botulínica preventiva e para alívio do bruxismo",
        "Bioestimuladores de colágeno para sustentação e firmeza",
        "Arquitetura facial personalizada sem artificialidade"
      ],
      time: "Procedimentos em consultório de 40 a 60 min"
    }
  };

  const specialtyModal = document.getElementById('specialty-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBadge = document.getElementById('modal-badge');
  const modalDesc = document.getElementById('modal-desc');
  const modalList = document.getElementById('modal-list');
  const modalTime = document.getElementById('modal-time');
  const modalClose = document.getElementById('modal-close');
  const modalCtaBtn = document.getElementById('modal-cta-btn');

  // Open Specialty Modal
  document.querySelectorAll('[data-specialty]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-specialty');
      const data = specialtyDetails[key];
      if (data && specialtyModal) {
        modalTitle.textContent = data.title;
        modalBadge.textContent = data.badge;
        modalDesc.textContent = data.desc;
        modalTime.textContent = data.time;
        
        modalList.innerHTML = '';
        data.highlights.forEach(item => {
          const li = document.createElement('li');
          li.className = 'flex items-start gap-2.5 text-sm text-[#4A4F55]';
          li.innerHTML = `
            <svg class="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>${item}</span>
          `;
          modalList.appendChild(li);
        });

        // Set treatment select in form when clicking modal CTA
        if (modalCtaBtn) {
          modalCtaBtn.onclick = () => {
            closeModal();
            const select = document.getElementById('form-treatment');
            if (select) {
              const optionMap = {
                lentes: "Lentes de Contato em Porcelana",
                alinhadores: "Ortodontia Invisível (Alinhadores)",
                implantes: "Implantodontia Avançada",
                harmonizacao: "Harmonização Orofacial"
              };
              select.value = optionMap[key] || "Avaliação Geral";
            }
            document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
          };
        }

        specialtyModal.classList.remove('hidden');
        specialtyModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = () => {
    if (specialtyModal) {
      specialtyModal.classList.add('hidden');
      specialtyModal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  };

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (specialtyModal) {
    specialtyModal.addEventListener('click', (e) => {
      if (e.target === specialtyModal) closeModal();
    });
  }

  // 4. Lead Capture Form Handling with Web3Forms & JavaScript Validation
  const leadForm = document.getElementById('lead-form');
  const formResult = document.getElementById('form-result');
  const submitBtn = document.getElementById('form-submit-btn');
  const btnText = document.getElementById('btn-text');
  const formSuccessToast = document.getElementById('form-success-toast');

  if (leadForm) {
    leadForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Reset previous messages
      if (formResult) {
        formResult.classList.add('hidden');
        formResult.innerHTML = '';
      }

      // 1. Get Values
      const name = document.getElementById('form-name')?.value.trim() || '';
      const email = document.getElementById('form-email')?.value.trim() || '';
      const phone = document.getElementById('form-phone')?.value.trim() || '';
      const treatment = document.getElementById('form-treatment')?.value || 'Avaliação Geral';
      const period = document.getElementById('form-period')?.value || 'Manhã';
      const message = document.getElementById('form-message')?.value.trim() || '';

      // 2. Client-Side Validation
      const showValidationError = (msg) => {
        if (formResult) {
          formResult.className = "p-4 rounded-xl text-sm font-medium bg-rose-950/80 text-rose-300 border border-rose-500/50 flex items-start gap-2.5 animate-fadeIn";
          formResult.innerHTML = `
            <svg class="w-5 h-5 text-rose-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
            <div>
              <p class="font-semibold text-white">Por favor, verifique os campos:</p>
              <p class="text-xs text-rose-200 mt-0.5">${msg}</p>
            </div>
          `;
          formResult.classList.remove('hidden');
        }
      };

      if (name.length < 3) {
        showValidationError('Digite seu nome completo (mínimo de 3 caracteres).');
        document.getElementById('form-name')?.focus();
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showValidationError('Digite um endereço de e-mail válido.');
        document.getElementById('form-email')?.focus();
        return;
      }

      const phoneDigits = phone.replace(/\D/g, '');
      if (phoneDigits.length < 10) {
        showValidationError('Digite um número de telefone/WhatsApp válido com DDD (mínimo 10 dígitos).');
        document.getElementById('form-phone')?.focus();
        return;
      }

      if (message.length < 5) {
        showValidationError('Por favor, escreva uma breve mensagem sobre seu interesse.');
        document.getElementById('form-message')?.focus();
        return;
      }

      // 3. UI Loading State
      if (submitBtn) {
        submitBtn.disabled = true;
        if (btnText) btnText.textContent = 'Enviando solicitação...';
      }

      if (formResult) {
        formResult.className = "p-3.5 rounded-xl text-sm font-medium bg-gold-400/20 text-gold-200 border border-gold-400/40 flex items-center justify-center gap-2.5";
        formResult.innerHTML = `
          <svg class="animate-spin w-5 h-5 text-gold-300 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Transmitindo seus dados com segurança...</span>
        `;
        formResult.classList.remove('hidden');
      }

      // 4. Send to Web3Forms API via Fetch
      const formData = new FormData(leadForm);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: json
        });

        const result = await response.json();

        if (response.status === 200 && result.success) {
          // Success Feedback
          if (formResult) {
            formResult.className = "p-4 rounded-xl text-sm font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-500/50 flex items-start gap-2.5 animate-fadeIn";
            formResult.innerHTML = `
              <svg class="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="font-semibold text-white">Solicitação enviada com sucesso!</p>
                <p class="text-xs text-emerald-200 mt-0.5">Recebemos seus dados. Nossa equipe de concierge entrará em contato em breve para confirmar seu horário.</p>
              </div>
            `;
            formResult.classList.remove('hidden');
          }

          // Pre-generate WhatsApp direct link
          const clinicPhone = '5511987654321';
          const textMsg = encodeURIComponent(
            `Olá, equipe Aurum Odontologia! Acabei de enviar minha solicitação pelo site.\n\n*Nome:* ${name}\n*E-mail:* ${email}\n*Telefone:* ${phone}\n*Interesse:* ${treatment}\n*Período:* ${period}\n*Mensagem:* ${message}`
          );
          const waUrl = `https://wa.me/${clinicPhone}?text=${textMsg}`;

          // Also open confirmation modal
          if (formSuccessToast) {
            formSuccessToast.classList.remove('hidden');
            formSuccessToast.classList.add('flex');
            const waRedirectBtn = document.getElementById('toast-wa-redirect');
            if (waRedirectBtn) {
              waRedirectBtn.href = waUrl;
            }
          }

          leadForm.reset();

        } else {
          // Web3Forms returned an error
          throw new Error(result.message || 'Falha ao processar solicitação.');
        }

      } catch (error) {
        console.error('Web3Forms Error:', error);
        if (formResult) {
          formResult.className = "p-4 rounded-xl text-sm font-medium bg-rose-950/80 text-rose-300 border border-rose-500/50 flex items-start gap-2.5 animate-fadeIn";
          formResult.innerHTML = `
            <svg class="w-5 h-5 text-rose-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div>
              <p class="font-semibold text-white">Não foi possível enviar a mensagem no momento.</p>
              <p class="text-xs text-rose-200 mt-0.5">Houve uma instabilidade temporária. Você pode nos chamar diretamente no WhatsApp pelo botão flutuante.</p>
            </div>
          `;
          formResult.classList.remove('hidden');
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          if (btnText) btnText.textContent = 'Solicitar Agendamento Exclusivo';
        }
      }
    });
  }

  // Close toast modal
  const closeToastBtn = document.getElementById('close-toast-btn');
  if (closeToastBtn && formSuccessToast) {
    closeToastBtn.addEventListener('click', () => {
      formSuccessToast.classList.add('hidden');
      formSuccessToast.classList.remove('flex');
    });
  }

  // 5. Phone Input Mask (Brazilian format)
  const phoneInput = document.getElementById('form-phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
      e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
  }

  // 6. FAQ Accordion Toggle
  const faqButtons = document.querySelectorAll('.faq-btn');
  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const icon = button.querySelector('.faq-icon');
      const isOpen = answer.classList.contains('open');

      // Close all other faqs
      document.querySelectorAll('.faq-answer').forEach(el => el.classList.remove('open'));
      document.querySelectorAll('.faq-icon').forEach(el => el.classList.remove('rotate-180'));

      if (!isOpen) {
        answer.classList.add('open');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });

  // 7. Scroll to Top Button
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        scrollTopBtn.classList.add('opacity-100');
      } else {
        scrollTopBtn.classList.add('opacity-0', 'pointer-events-none');
        scrollTopBtn.classList.remove('opacity-100');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
