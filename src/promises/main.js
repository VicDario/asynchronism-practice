const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Hey!");
        } else {
            reject(new Error("Whoooops!"));
        }
    });
};

somethingWillHappen()
    .then((response) => console.log(response))
    .catch((error) => console.error(error));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("Hey!");
            }, 3000);
        } else {
            const error = new Error("Whoooops!");
            reject(error);
        }
    });
};

somethingWillHappen2()
    .then((response) => console.log(response))
    .catch((error) => console.error(error));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then((response) => console.log(response))
    .catch((error) => console.error(error));