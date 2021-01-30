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
      $('.registration__btn-next').css('display', 'none');
      // $('.registration__btn-prev').addClass('last-question');
      // $('.registration__btn-send').css('display', 'inline-block');
    } else {
      $('.registration__btn-next').css('display', 'inline-block');
      // $('.registration__btn-prev').removeClass('last-question');
      // $('.registration__btn-send').css('display', 'none');
    }

    if (attrID == 'tab1') {
      $('.registration__btn-prev').css('display', 'none');
    } else {
      $('.registration__btn-prev').css('display', 'inline-block');
    }

    $(this).addClass('question__answered');
  });

  $('.registration__btn-next').on('click', function () {
    var tabs = $(this).closest('.registration__wrap').find('.registration__tabs-item');
    var currentIndex = tabs.index($(this).closest('.registration__wrap').find('.registration__tabs-item.active'));

    if (currentIndex === tabs.length - 1) {
      $(tabs[0]).trigger('click');
    } else {
      $(tabs[currentIndex + 1]).trigger('click');
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
const defaultSelect = () => {
  const selectCollection = document.querySelectorAll('.js-personal-select');

  if (selectCollection) {
    selectCollection.forEach((el) => {
      const choices = new Choices(el, {
        searchEnabled: false,
        placeholder: true,
        shouldSort: false,
        classNames: {
          containerOuter: 'choices personal__choices',
        },
      });
    });
  }
};

defaultSelect();

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
