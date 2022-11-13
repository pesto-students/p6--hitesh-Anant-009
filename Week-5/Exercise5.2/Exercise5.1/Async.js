async function callAsync() {
    const response1 = await doTask1();
    if(response1) {
      const response2 = await doTask2();
  
      if(response2) {
        const response3 = await doTask3();
  
        return response3;
      }
    }
  };
  