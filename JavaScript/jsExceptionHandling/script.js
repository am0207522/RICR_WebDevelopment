async function DoCalculation() {
  try {
    const API_URL = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous";

    const response = await fetch(API_URL);

    const data = await response.json();

    testingData(data);
  } catch (e) {
    alert(e.message);
  } finally {
    console.log("Process Complete");
  }
}

function testingData(Data) {
  //   try {
  //     console.log(data);
  //   } catch (e) {
  //     throw e;
  //   }
  throw new Error("Something Happens");
}