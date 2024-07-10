$(function(){
// accordeon start
  $('.questions__list-title, .questions__list-link').on('click', function (e) {
    e.preventDefault();
    
    let $item = $(this).closest('.questions__content-item');
    let $text = $item.find('.questions__list-text');
    let $link = $item.find('.questions__list-link');
    
    if ($text.is(':visible')) {
        $item.removeClass('questions__content-item--active');
        $text.slideUp();
        $link.hide();
    } else {
        $('.questions__content-item').removeClass('questions__content-item--active');
        $('.questions__list-text').slideUp();
        $('.questions__list-link').hide();
        $item.addClass('questions__content-item--active');
        $text.slideDown();
        $link.show();
    }
});
// accordeon end


// slider start

$('.popular__slider').slick({
  arrows: false,
  slidesToShow: 3,
  infinite: true,
  draggable: true,
  dots: true,
  appendDots: ('.popular__slider-dots'),
})

$('.popular__slider-arrow--prev').on('click', function (e) {
  e.preventDefault()
  $('.popular__slider').slick('slickPrev')
})

$('.popular__slider-arrow--next').on('click', function (e) {
  e.preventDefault()
  $('.popular__slider').slick('slickNext')
})

// slider end

});




$(document).ready(function() {
  const calendarContent = $(".calendar__content");

  const renderCalendar = (startDate) => {
    const date = startDate ? new Date(startDate) : new Date();
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const month = date.toLocaleString('default', { month: 'long' });

    let calendarHTML = '';

    for (let i = 1; i <= daysInMonth; i++) {
      const dayOfWeek = new Date(date.getFullYear(), date.getMonth(), i).toLocaleString('default', { weekday: 'short' }).toUpperCase();
      const isWeekend = dayOfWeek === 'СБ' || dayOfWeek === 'ВС';
      const dayNumber = `${i}`; // Число дня без обертки в <span>
      const dayOfWeekHTML = isWeekend ? `<span>${dayOfWeek}</span>` : `${dayOfWeek}`; // Обертка дня недели в <span> для выходных дней
      const isActive = i === 23 ? ' calendar__date-link--active' : ''; // Добавляем класс, если число равно 23

      calendarHTML += `
        <li class="calendar__date">
          <a class="calendar__date-link${isActive}" href="#">
            <p>${dayNumber}</p>
            <p>${dayOfWeekHTML}</p>
          </a>
        </li>
      `;
    }

    calendarContent.html(`<ul>${calendarHTML}</ul>`);
  };

  // Пример вызова функции с начальной датой 1 мая 2024 года
  renderCalendar('2024-05-01');
});
