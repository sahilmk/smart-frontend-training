const itemCtrl = (function () {

    const item = function (id, iname, calories) {
        this.id = id;
        this.iname = iname;
        this.calories = calories
    }


    const data = {
        items: [
            { id: '1', iname: 'cookie', calories: 200 },
            { id: '2', iname: 'apple', calories: 300 },
            { id: '3', iname: 'paratha', calories: 1200 },
        ],
        currentItem: null,
        totalCalories: 0
    }

    return {
        getItem: function () {
            return data.items;
        },
        addItem: function (meal, cal) {
            let nid;
            if (data.items.length > 0) {
                nid = data.items.length
            } else {
                nid = 0;
            }

            let newItem = new item(nid, meal, cal);
            data.items.push(newItem)
        },
        data: data
    }
})();

const uiCtrl = (function () {
    return {
        showItem: function (items) {
            let buffer = '';
            items.forEach(i => {
                buffer += `
                    <li class="collection-item" id="item-${i.id}">
                        <strong>${i.iname}: </strong> <em>${i.calories} Calories</em>
                        <a href="#" class="secondary-content">
                        <i class="edit-item fa fa-pencil"></i>
                        </a>
                    </li>
                `
            });

            document.getElementById('item-list').innerHTML = buffer;
        }
    }
})();

const App = (function (itemCtrl, uiCtrl) {
    const items = itemCtrl.getItem();

    const addMeal = function () {
        document.querySelector('.add-btn').addEventListener('click', addData);
    }

    const addData = function (e) {
        const meal = document.getElementById('item-name').value;
        const cal = document.getElementById('item-calories').value;

        itemCtrl.addItem(meal, cal);
        e.preventDefault();
    }

    return {
        display: function () {
            uiCtrl.showItem(items);
            addMeal();
        }
    }
})(itemCtrl, uiCtrl);

App.display()

