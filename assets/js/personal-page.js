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
