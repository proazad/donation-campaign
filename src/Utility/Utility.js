const getData = () => {
    const localData = localStorage.getItem("campaigns");
    if (localData) {
        const jsonData = JSON.parse(localData);
        return jsonData;
    }
    return [];
}

const saveLocalStorage = (data) => {
    const oldData = getData();
    const newData = [...oldData, data];
    localStorage.setItem("campaigns", JSON.stringify(newData));
}
export { getData, saveLocalStorage };
