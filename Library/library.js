

let obj = {
    name: 'kie',
    age: 30,
    swag: "crazy",
    favorites: ['candy', 'chips', 'apples'],
    getFav: () => {
        // console.log(this.favorites)
        console.log("kieluana's favorites hits are:");
        this.favorites.forEach(favorites => {
            console.log(favorites)
        })
    }
}

obj.getFav()