const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "Keep your face always toward the sunshine - and shadows will fall behind you. - Walt Whitman",
    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
    "It's not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. - Charles Darwin",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. - Steve Jobs",
    "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us. - Helen Keller",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "If you want to achieve greatness stop asking for permission. - Anonymous",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  ];

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
module.exports = {quotes, getRandomQuote};  