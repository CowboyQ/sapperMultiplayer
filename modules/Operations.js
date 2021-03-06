module.exports = function () {

    var opers = {

        //insert

        Insert: function (collection, data) {
            collection.insert(data, function (err, result) {
                console.log(result)
            });
        },

        //select all - zwraca tablicę pasujących dokumentów

        SelectAll: function (collection, callback) {
            collection.find({}).toArray(function (err, items) {
                //console.log(items)
                if (err) console.log(err)
                else callback(items)
            });
        },

        //select - zwraca tablicę pasujących dokumentów, z ograniczeniem

        SelectAndLimit: function (collection) {
            collection.find({ login: "test" }).toArray(function (err, items) {
                console.log(items)
            });
        },

        //delete - usunięcie poprzez id - uwaga na ObjectID

        DeleteById: function (ObjectID, collection, id) {
            collection.remove({ _id: ObjectID(id) }, function (err, data) {
                console.log("remove successful")
            })
        },

        // update - aktualizacja poprzez id - uwaga na ObjectID
        // uwaga: bez $set usuwa poprzedni obiekt i wstawia nowy
        // z $set - dokunuje aktualizacji tylko wybranego pola

        UpdateById: function (ObjectID, collection, data) {
            collection.updateOne(
                { _id: ObjectID(data.id) },
                { $set: { password: data.password, login: data.login, id: data._id } },
                function (err, data) {
                    console.log("update: " + data)
                })
        },

    }

    return opers;

}