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

// добавление удаление питомцев START
const btnRegNewAnimal = document.querySelector('.registration__add-pet');

const cardTemplate = 
  `
    <div class="registration__group">
    <button class="registration__del-pet" type="button">Удалить питомца</button>
    <div class="personal__input-label-wrap">
      <label class="personal__input-label" for="personal__input-pet-1">Ваш
        питомец<span>*</span></label>
      <div class="personal__tooltip-wrap">
        <button class="personal__tooltip" type="button" aria-describedby="personal__tooltip">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.5 0C11.6423 0 15 3.3585 15 7.5C15 11.6415 11.6423 15 7.5 15C3.35775 15 0 11.6415 0 7.5C0 3.3585 3.35775 0 7.5 0ZM7.5 10.125C7.30109 10.125 7.11032 10.204 6.96967 10.3447C6.82902 10.4853 6.75 10.6761 6.75 10.875C6.75 11.0739 6.82902 11.2647 6.96967 11.4053C7.11032 11.546 7.30109 11.625 7.5 11.625C7.69891 11.625 7.88968 11.546 8.03033 11.4053C8.17098 11.2647 8.25 11.0739 8.25 10.875C8.25 10.6761 8.17098 10.4853 8.03033 10.3447C7.88968 10.204 7.69891 10.125 7.5 10.125ZM7.5 3.5625C6.95299 3.5625 6.42839 3.7798 6.04159 4.16659C5.6548 4.55339 5.4375 5.07799 5.4375 5.625C5.43754 5.76752 5.49168 5.90471 5.58898 6.00884C5.68628 6.11298 5.81947 6.17631 5.96166 6.18602C6.10385 6.19573 6.24442 6.15111 6.35497 6.06118C6.46553 5.97124 6.53782 5.84269 6.55725 5.7015L6.5625 5.625C6.5625 5.37636 6.66127 5.1379 6.83709 4.96209C7.0129 4.78627 7.25136 4.6875 7.5 4.6875C7.74864 4.6875 7.9871 4.78627 8.16291 4.96209C8.33873 5.1379 8.4375 5.37636 8.4375 5.625C8.4375 6.02925 8.33625 6.22875 7.95375 6.624L7.8525 6.7275C7.194 7.386 6.9375 7.81275 6.9375 8.625C6.9375 8.77418 6.99676 8.91726 7.10225 9.02275C7.20774 9.12824 7.35082 9.1875 7.5 9.1875C7.64918 9.1875 7.79226 9.12824 7.89775 9.02275C8.00324 8.91726 8.0625 8.77418 8.0625 8.625C8.0625 8.22075 8.16375 8.02125 8.54625 7.626L8.6475 7.5225C9.306 6.864 9.5625 6.43725 9.5625 5.625C9.5625 5.07799 9.3452 4.55339 8.95841 4.16659C8.57161 3.7798 8.04701 3.5625 7.5 3.5625Z"
              fill="#D1D1D1" />
          </svg>
        </button>
        <div class="personal__tooltip-text" role="tooltip" id="personal__tooltip">введите необходимую
          информацию</div>
      </div>
    </div>
    <div class="personal__input-wrap">
      <select class="personal__select js-personal-select-pet" id="personal__input-pet-1" name="pet[]">
        <option value="Собака">Собака</option>
        <option value="Кот">Кот</option>
        <option value="Рыбка">Рыбка</option>
        <option value="Грызун">Грызун</option>
        <option value="Птица">Птица</option>
        <option value="Другой">Другой</option>
      </select>
      <img class="personal__input-img" src="assets/img/ico-paw.png" alt="ico paw">
    </div>
    <div class="personal__input-label-wrap">
      <label class="personal__input-label" for="personal__input-moniker-1">Кличка Вашего
        питомца</label>
      <div class="personal__tooltip-wrap">
        <button class="personal__tooltip" type="button" aria-describedby="personal__tooltip">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.5 0C11.6423 0 15 3.3585 15 7.5C15 11.6415 11.6423 15 7.5 15C3.35775 15 0 11.6415 0 7.5C0 3.3585 3.35775 0 7.5 0ZM7.5 10.125C7.30109 10.125 7.11032 10.204 6.96967 10.3447C6.82902 10.4853 6.75 10.6761 6.75 10.875C6.75 11.0739 6.82902 11.2647 6.96967 11.4053C7.11032 11.546 7.30109 11.625 7.5 11.625C7.69891 11.625 7.88968 11.546 8.03033 11.4053C8.17098 11.2647 8.25 11.0739 8.25 10.875C8.25 10.6761 8.17098 10.4853 8.03033 10.3447C7.88968 10.204 7.69891 10.125 7.5 10.125ZM7.5 3.5625C6.95299 3.5625 6.42839 3.7798 6.04159 4.16659C5.6548 4.55339 5.4375 5.07799 5.4375 5.625C5.43754 5.76752 5.49168 5.90471 5.58898 6.00884C5.68628 6.11298 5.81947 6.17631 5.96166 6.18602C6.10385 6.19573 6.24442 6.15111 6.35497 6.06118C6.46553 5.97124 6.53782 5.84269 6.55725 5.7015L6.5625 5.625C6.5625 5.37636 6.66127 5.1379 6.83709 4.96209C7.0129 4.78627 7.25136 4.6875 7.5 4.6875C7.74864 4.6875 7.9871 4.78627 8.16291 4.96209C8.33873 5.1379 8.4375 5.37636 8.4375 5.625C8.4375 6.02925 8.33625 6.22875 7.95375 6.624L7.8525 6.7275C7.194 7.386 6.9375 7.81275 6.9375 8.625C6.9375 8.77418 6.99676 8.91726 7.10225 9.02275C7.20774 9.12824 7.35082 9.1875 7.5 9.1875C7.64918 9.1875 7.79226 9.12824 7.89775 9.02275C8.00324 8.91726 8.0625 8.77418 8.0625 8.625C8.0625 8.22075 8.16375 8.02125 8.54625 7.626L8.6475 7.5225C9.306 6.864 9.5625 6.43725 9.5625 5.625C9.5625 5.07799 9.3452 4.55339 8.95841 4.16659C8.57161 3.7798 8.04701 3.5625 7.5 3.5625Z"
              fill="#D1D1D1" />
          </svg>
        </button>
        <div class="personal__tooltip-text" role="tooltip" id="personal__tooltip">введите необходимую
          информацию</div>
      </div>
    </div>
    <div class="personal__input-wrap">
      <input class="personal__input" id="personal__input-moniker-1" type="text" name="moniker[]"
        placeholder="Кличка Вашего питомца" maxlength="20">
      <img class="personal__input-img" src="assets/img/ico-paw.png" alt="ico paw">
    </div>
    <div class="personal__input-label-wrap">
      <label class="personal__input-label" for="personal__input-breed-1">Порода</label>
      <div class="personal__tooltip-wrap">
        <button class="personal__tooltip" type="button" aria-describedby="personal__tooltip">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.5 0C11.6423 0 15 3.3585 15 7.5C15 11.6415 11.6423 15 7.5 15C3.35775 15 0 11.6415 0 7.5C0 3.3585 3.35775 0 7.5 0ZM7.5 10.125C7.30109 10.125 7.11032 10.204 6.96967 10.3447C6.82902 10.4853 6.75 10.6761 6.75 10.875C6.75 11.0739 6.82902 11.2647 6.96967 11.4053C7.11032 11.546 7.30109 11.625 7.5 11.625C7.69891 11.625 7.88968 11.546 8.03033 11.4053C8.17098 11.2647 8.25 11.0739 8.25 10.875C8.25 10.6761 8.17098 10.4853 8.03033 10.3447C7.88968 10.204 7.69891 10.125 7.5 10.125ZM7.5 3.5625C6.95299 3.5625 6.42839 3.7798 6.04159 4.16659C5.6548 4.55339 5.4375 5.07799 5.4375 5.625C5.43754 5.76752 5.49168 5.90471 5.58898 6.00884C5.68628 6.11298 5.81947 6.17631 5.96166 6.18602C6.10385 6.19573 6.24442 6.15111 6.35497 6.06118C6.46553 5.97124 6.53782 5.84269 6.55725 5.7015L6.5625 5.625C6.5625 5.37636 6.66127 5.1379 6.83709 4.96209C7.0129 4.78627 7.25136 4.6875 7.5 4.6875C7.74864 4.6875 7.9871 4.78627 8.16291 4.96209C8.33873 5.1379 8.4375 5.37636 8.4375 5.625C8.4375 6.02925 8.33625 6.22875 7.95375 6.624L7.8525 6.7275C7.194 7.386 6.9375 7.81275 6.9375 8.625C6.9375 8.77418 6.99676 8.91726 7.10225 9.02275C7.20774 9.12824 7.35082 9.1875 7.5 9.1875C7.64918 9.1875 7.79226 9.12824 7.89775 9.02275C8.00324 8.91726 8.0625 8.77418 8.0625 8.625C8.0625 8.22075 8.16375 8.02125 8.54625 7.626L8.6475 7.5225C9.306 6.864 9.5625 6.43725 9.5625 5.625C9.5625 5.07799 9.3452 4.55339 8.95841 4.16659C8.57161 3.7798 8.04701 3.5625 7.5 3.5625Z"
              fill="#D1D1D1" />
          </svg>
        </button>
        <div class="personal__tooltip-text" role="tooltip" id="personal__tooltip">введите необходимую
          информацию</div>
      </div>
    </div>
    <div class="personal__input-wrap">
      <input class="personal__input" id="personal__input-breed-1" type="text" name="breed[]"
        placeholder="Порода Вашего питомца" maxlength="20">
      <img class="personal__input-img" src="assets/img/ico-paw.png" alt="ico paw">
    </div>
  </div>
`;

let animalBlock = document.querySelector('.registration__group--animals');

btnRegNewAnimal.addEventListener('click', () => {
  animalBlock.insertAdjacentHTML('beforeend', cardTemplate);
  defaultSelectPet();
});

animalBlock.addEventListener('click', (event) => {
  let target = event.target;

  if (target.classList.contains('registration__del-pet')) {
    target.closest('.registration__group').remove();
  }
});
// добавление удаление питомцев END
