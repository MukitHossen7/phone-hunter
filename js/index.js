const loadAllData = async () => {
  document.getElementById("loadingContainer").classList.add("hidden");

  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=iphone`
  );
  const phoneData = await res.json();
  displayLoadPhone(phoneData.data);
};

// display-load-phones
const displayLoadPhone = (phones) => {
  console.log(phones);
};
// display-all-phones

// show-loading-function
const loadingDisplay = () => {
  document.getElementById("loadingContainer").classList.remove("hidden");
  setTimeout(() => {
    loadAllData();
  }, 3000);
};
// show-loading-function

loadAllData();
