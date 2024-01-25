function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll('.widget')
  widgets.forEach(widget => {
    widget.classList.add('widget')
  })

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const quoteOfTheDay = document.querySelector('.quote-of-the-day');
  quoteOfTheDay.forEach(quote => {
    
  })

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const CorporateSpeak = document.querySelector('.corporate-speak');

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const Countdown = document.querySelector('.countdown');

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const Friends = document.querySelector('.friends');

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  



  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
