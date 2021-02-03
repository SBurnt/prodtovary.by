// прохождение регистрации START
if ($('.registration__content').length) {
  registration();
}

function registration() {
  $('.registration__tabs-item').on('click', function () {
    var attrID = $(this).attr('data-tab');

    $(this).closest('.registration__wrap').find('.registration__tabs-item, .content__item').removeClass('active');

    $(this)
      .addClass('active')
      .closest('.registration__wrap')
      .find('.content__item[data-id="' + attrID + '"]')
      .addClass('active');

    if (attrID == 'tab3') {
      $('.personal__btn-wrap').css('display', 'none');
    } else {
      $('.personal__btn-wrap').css('display', 'flex');
    }

    if (attrID == 'tab2') {
      $('.registration__btn-next').addClass('registration__btn-step-2');
      $('.registration__btn-next').removeClass('registration__btn-step-1');
    }

    if (attrID == 'tab1') {
      $('.registration__btn-next').addClass('registration__btn-step-1');
      $('.registration__btn-next').removeClass('registration__btn-step-2');
      $('.registration__btn-prev').css('display', 'none');
    } else {
      $('.registration__btn-prev').css('display', 'inline-block');
    }

    $(this).addClass('question__answered');
  });

  // $('.registration__btn-next').on('click', function () {
  //   var tabs = $(this).closest('.registration__wrap').find('.registration__tabs-item');
  //   var currentIndex = tabs.index($(this).closest('.registration__wrap').find('.registration__tabs-item.active'));

  //   if (currentIndex === tabs.length - 1) {
  //     $(tabs[0]).trigger('click');
  //   } else {
  //     $(tabs[currentIndex + 1]).trigger('click');
  //   }
  // });

  $('.registration__btn-step-1').on('click', function () {
    const inputCard = $('input#personal__input-card');
    const inputSurname = $('input#personal__input-surname');
    const inputName = $('input#personal__input-name');
    const inputTel = $('input#personal__input-tel');
    const inputDate = $('select#personal__input-date');
    const inputMonth = $('select#personal__input-month');
    const inputYear = $('select#personal__input-year');

    const regTel = /\+\d{3}\(\d{2}\)\d{3}-\d{2}-\d{2}/;

    if (
      inputCard.val() != '' &&
      inputSurname.val() != '' &&
      inputName.val() != '' &&
      regTel.exec(inputTel.val()) != null &&
      inputDate.val() != 'null' &&
      inputMonth.val() != 'null' &&
      inputYear.val() != 'null'
    ) {
      var tabs = $(this).closest('.registration__wrap').find('.registration__tabs-item');
      var currentIndex = tabs.index($(this).closest('.registration__wrap').find('.registration__tabs-item.active'));

      if (currentIndex === tabs.length - 1) {
        $(tabs[0]).trigger('click');
      } else {
        $(tabs[currentIndex + 1]).trigger('click');
      }
    } else {
      if (inputCard.val() != '') {
        inputCard.css('border', '1px solid #c4c4c4');
      } else {
        inputCard.css('border', '1px solid red');
      }
      if (inputSurname.val() != '') {
        inputSurname.css('border', '1px solid #c4c4c4');
      } else {
        inputSurname.css('border', '1px solid red');
      }
      if (inputName.val() != '') {
        inputName.css('border', '1px solid #c4c4c4');
      } else {
        inputName.css('border', '1px solid red');
      }
      if (regTel.exec(inputTel.val()) != null) {
        inputTel.css('border', '1px solid #c4c4c4');
      } else {
        inputTel.css('border', '1px solid red');
      }
      if (inputDate.val() != 'null') {
        $('.choices__inner.date').css('border', '1px solid #c4c4c4');
      } else {
        $('.choices__inner.date').css('border', '1px solid red');
      }
      if (inputMonth.val() != 'null') {
        $('.choices__inner.month').css('border', '1px solid #c4c4c4');
      } else {
        $('.choices__inner.month').css('border', '1px solid red');
      }
      if (inputYear.val() != 'null') {
        $('.choices__inner.year').css('border', '1px solid #c4c4c4');
      } else {
        $('.choices__inner.year').css('border', '1px solid red');
      }
      return false;
    }
  });

  // $('.registration__btn-prev').on('click', function () {
  //   var tabs = $(this).closest('.registration__wrap').find('.registration__tabs-item');
  //   var currentIndex = tabs.index($(this).closest('.registration__wrap').find('.registration__tabs-item.active'));

  //   if (!currentIndex) {
  //     $(tabs[$tabs.length - 1]).trigger('click');
  //   } else {
  //     $(tabs[currentIndex - 1]).trigger('click');
  //   }
  // });
}
// прохождение регистрации END

// кастомный select на дату рождения START
const defaultSelectDateBirth = () => {
  const selectCollection = document.querySelectorAll('#personal__input-date');

  if (selectCollection) {
    selectCollection.forEach((el) => {
      const choices = new Choices(el, {
        searchEnabled: false,
        placeholder: true,
        shouldSort: false,
        classNames: {
          containerOuter: 'choices personal__choices',
          containerInner: 'choices__inner date',
        },
      });
    });
  }
};
defaultSelectDateBirth();

const defaultSelectMonthBirth = () => {
  const selectCollection = document.querySelectorAll('#personal__input-month');

  if (selectCollection) {
    selectCollection.forEach((el) => {
      const choices = new Choices(el, {
        searchEnabled: false,
        placeholder: true,
        shouldSort: false,
        classNames: {
          containerOuter: 'choices personal__choices',
          containerInner: 'choices__inner month',
        },
      });
    });
  }
};
defaultSelectMonthBirth();

const defaultSelectYearBirth = () => {
  const selectCollection = document.querySelectorAll('#personal__input-year');

  if (selectCollection) {
    selectCollection.forEach((el) => {
      const choices = new Choices(el, {
        searchEnabled: false,
        placeholder: true,
        shouldSort: false,
        classNames: {
          containerOuter: 'choices personal__choices',
          containerInner: 'choices__inner year',
        },
      });
    });
  }
};

defaultSelectYearBirth();

const defaultSelectPet = () => {
  const selectCollection = document.querySelectorAll('.js-personal-select-pet');

  if (selectCollection) {
    selectCollection.forEach((el) => {
      const choices = new Choices(el, {
        searchEnabled: false,
        // placeholder: true,
        shouldSort: false,
        classNames: {
          containerOuter: 'choices personal__choices pet',
        },
      });
    });
  }
};

defaultSelectPet();
// кастомный select на дату рождения END

$('#personal__input-tel').mask('+375(99)999-99-99', { autoclear: false });
$('#personal__input-card').mask('99999', { autoclear: false });

const sliderPartners = document.querySelector('.js-partners-slider');
if (sliderPartners) {
  const swiper = new Swiper(sliderPartners, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    centeredSlides: true,
    // loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

class Modal {
  constructor(options) {
    const defaultOptions = {
      isOpen: () => {},
      isClose: () => {},
    };
    this.options = Object.assign(defaultOptions, options);
    this.modal = document.querySelector('.modals');
    this.speed = false;
    this.animation = false;
    this.isOpen = false;
    this.modalContainer = false;
    this.previousActiveElement = false;
    this.fixBlocks = document.querySelectorAll('.fix-block');
    this.focusElements = ['a[href]', 'input', 'button', 'select', 'textarea', '[tabindex]'];
    this.events();
  }

  events() {
    if (this.modal) {
      document.addEventListener(
        'click',
        function (e) {
          const clickedElement = e.target.closest('[data-path]');
          if (clickedElement) {
            const target = clickedElement.dataset.path;
            const animation = clickedElement.dataset.animation;
            const speed = clickedElement.dataset.speed;
            this.animation = animation ? animation : 'fade';
            this.speed = speed ? parseInt(speed) : 300;
            this.modalContainer = document.querySelector(`[data-target="${target}"]`);
            this.open();
            return;
          }

          if (e.target.closest('.modal__close')) {
            this.close();
            return;
          }
          if (e.target.closest('.personal__btn.cancel')) {
            this.close();
            return;
          }
          if (e.target.closest('.personal__btn.ok')) {
            this.close();
            return;
          }
        }.bind(this)
      );

      window.addEventListener(
        'keydown',
        function (e) {
          if (e.keyCode === 27) {
            if (this.isOpen) {
              this.close();
            }
          }

          if (e.keyCode === 9 && this.isOpen) {
            this.focusCatch(e);
            return;
          }
        }.bind(this)
      );

      this.modal.addEventListener(
        'click',
        function (e) {
          if (
            !e.target.classList.contains('modal__container') &&
            !e.target.closest('.modal__container') &&
            this.isOpen
          ) {
            this.close();
          }
        }.bind(this)
      );
    }
  }

  open() {
    this.previousActiveElement = document.activeElement;

    this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`);
    this.modal.classList.add('is-open');
    this.disableScroll();

    this.modalContainer.classList.add('modal__open');
    this.modalContainer.classList.add(this.animation);

    setTimeout(() => {
      this.options.isOpen(this);
      this.modalContainer.classList.add('animate-open');
      this.isOpen = true;
      this.focusTrap();
    }, this.speed);
  }

  close() {
    if (this.modalContainer) {
      this.modalContainer.classList.remove('animate-open');
      this.modalContainer.classList.remove(this.animation);
      this.modal.classList.remove('is-open');
      this.modalContainer.classList.remove('modal__open');

      this.enableScroll();
      this.options.isClose(this);
      this.isOpen = false;
      this.focusTrap();
    }
  }

  focusCatch(e) {
    const focusable = this.modalContainer.querySelectorAll(this.focusElements);
    const focusArray = Array.prototype.slice.call(focusable);
    const focusedIndex = focusArray.indexOf(document.activeElement);

    if (e.shiftKey && focusedIndex === 0) {
      focusArray[focusArray.length - 1].focus();
      e.preventDefault();
    }

    if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
      focusArray[0].focus();
      e.preventDefault();
    }
  }

  focusTrap() {
    const focusable = this.modalContainer.querySelectorAll(this.focusElements);
    if (this.isOpen) {
      focusable[0].focus();
    } else {
      this.previousActiveElement.focus();
    }
  }

  disableScroll() {
    const pagePosition = window.scrollY;
    // this.lockPadding();
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
  }

  enableScroll() {
    const pagePosition = parseInt(document.body.dataset.position, 10);
    // this.unlockPadding();
    document.body.style.top = 'auto';
    document.body.classList.remove('disable-scroll');
    window.scroll({ top: pagePosition, left: 0 });
    document.body.removeAttribute('data-position');
  }

  lockPadding() {
    const paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    this.fixBlocks.forEach((el) => {
      el.style.paddingRight = paddingOffset;
    });
    document.body.style.paddingRight = paddingOffset;
  }

  unlockPadding() {
    this.fixBlocks.forEach((el) => {
      el.style.paddingRight = '0px';
    });
    document.body.style.paddingRight = '0px';
  }
}

const modal = new Modal({
  isOpen: (modal) => {},
  isClose: () => {},
});

const modalEditPerson = function () {
  const btnClientInfoEdit = document.querySelectorAll('.client-info__btn-edit');
  const btnPersonalOk = document.querySelector('.personal__btn.ok');
  const modalInput = document.querySelector('.js-input-modal');
  let parent = '';

  function setModalInfo(e) {
    parent.querySelector('.client-info__item-value').textContent = modalInput.value;
  }

  function getModalInfo(e) {
    parent = this.closest('.client-info__item');
    const childValue = parent.querySelector('.client-info__item-value').textContent;
    modalInput.value = childValue;
  }

  btnClientInfoEdit.forEach((item) => {
    item.addEventListener('click', getModalInfo);
  });

  btnPersonalOk.addEventListener('click', setModalInfo);
};

const btnClientInfoEdit = document.querySelector('.client-info__btn-edit');
if (btnClientInfoEdit) {
  modalEditPerson();
}
