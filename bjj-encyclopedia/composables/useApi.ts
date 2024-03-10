const apiUrl =
  process.env.API_ENDPOINT || "https://main.d2vy4qzsof71mx.amplifyapp.com";

export const useApi = () => {
  const getResults = async () => {
    return await fetch(`${apiUrl}/results`);
  };

  const deleteResult = async (resultId: any) => {
    return await fetch(`${apiUrl}/results/${resultId}`, {
      method: "DELETE",
    });
  };

  const getCategories = async (resultId: any) => {
    return await fetch(`${apiUrl}/categories`);
  };

  const addCategory = async (newCategoryName: any) => {
    return await fetch(`${apiUrl}/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newCategoryName.value,
      }),
    });
  };

  const getCoaches = async () => {
    return await fetch(`${apiUrl}/coaches`);
  };

  const addCoach = async (newCoachName: any) => {
    return await fetch(`${apiUrl}/coaches`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newCoachName.value,
      }),
    });
  };

  const addResult = async (newResult: any) => {
    return await fetch(`${apiUrl}/results`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newResult),
    });
  };

  const getResult = async (id: any) => {
    return await fetch(`${apiUrl}/results/${id}`);
  };

  return {
    deleteResult,
    getCategories,
    addCategory,
    getCoaches,
    addCoach,
    addResult,
    getResult,
    getResults,
  };
};
