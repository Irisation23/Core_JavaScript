// 객체 이해하기 1

var family = {
    'address': 'Seoul',

    memebers: {},

    addFamily: function (age, name, role) {
        this.memebers[role] = {
            age: age,
            name: name
        };
    },

    getHeadcount: function () {
        return Object.keys(this.memebers).length;
    }
};

family.addFamily(29, 'Jo', 'brother');
family.addFamily(27, 'Ahn', 'sister');
family.addFamily(32, 'Kim', 'me');

console.log(family.getHeadcount());
