const LocalStorage = (function () {

    return {
        addToLocalStorage: function (nItem) {
            var localdata = localStorage.getItem('items');
            var items;
            if (localdata === null) {
                items = [];
                items.push(nItem);
                localStorage.setItem('items', JSON.stringify(items));
            } else {
                items = JSON.parse(localStorage.getItem('items'));
                items.push(nItem);
                localStorage.setItem('items', JSON.stringify(items));
            }
        },
        getLocalstorageData: function () {
            var storagedata = localStorage.getItem('items');
            var item;
            if (storagedata === null) {
                item = [];
            } else {
                item = JSON.parse(storagedata);
            }
            return item;
        },
        updateLocalStorage: function (updatedItem) {
            var items = this.getLocalstorageData();
            items.forEach(function (i, index) {
                if (i.id === updatedItem.id) {
                    items[index] = updatedItem;
                    // items.splice(index, 1, updatedItem);
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
        },
        deleteFromLocalStorage: function (id) {
            var items = this.getLocalstorageData();
            items.forEach(function (i, index) {
                if (i.id === id) {
                    items.splice(index, 1);
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
        },
        removeAllData: function () {
            localStorage.removeItem('items');
        }
    }
})();

const itemCtrl = (function () {

    const item = function (id, iname, calories) {
        this.id = id;
        this.iname = iname;
        this.calories = calories
    }


    const data = {
        items: LocalStorage.getLocalstorageData(),
        currentItem: null,
        totalCalories: 0
    }

    return {
        getItem: function () {
            return data.items;
        },
        addItem: function (meal, cal) {
            document.getElementById('item-list').style.display = 'block';
            let nid;
            if (data.items.length > 0) {
                nid = data.items.length
            } else {
                nid = 0;
            }

            let newItem = new item(nid, meal, cal);
            data.items.push(newItem);
            return newItem;
        },
        calCalories: function () {
            if (data.items.length !== 0) {
                var cal = 0;
                data.items.forEach(i => {
                    cal += Number(i.calories);
                });
                return cal;
            } else {
                return 0;
            }
        },
        setCurrentItem: function (id) {
            data.currentItem = data.items[id];
        },
        updateItem: function (upmean, upcal) {
            var upitem;
            data.items.forEach(function (i) {
                if (i.id === data.currentItem.id) {
                    upitem = i;
                    i.iname = upmean;
                    i.calories = upcal;
                }
            });
            return upitem;
        },
        updateCalories: function () {
            var totalCalories = itemCtrl.calCalories();
            uiCtrl.showCalories(totalCalories);
        },
        deleteFromDatabase: function () {
            var ind
            data.items.forEach(function (i) {
                if (i.id === data.currentItem.id) {
                    ind = data.items.indexOf(i);
                }
            });
            data.items.splice(ind, 1);
        },
        deleteAllItems: function () {
            data.items = [];
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
        },

        displyOnScreen: function (item) {
            li = document.createElement('li');
            li.className = 'collection-item';
            li.id = `item-${item.id}`;

            li.innerHTML = `
                <strong>${item.iname}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil"></i>
                </a>
            `

            document.querySelector('#item-list').insertAdjacentElement('beforeend', li);
        },

        //Clear the inputes
        clearInput: function () {
            document.getElementById('item-name').value = '';
            document.getElementById('item-calories').value = '';
        },

        //Showing the calories
        showCalories: function (totalCalories) {
            document.querySelector('.total-calories').innerText = totalCalories;
        },

        //Display the input value of the edited item
        showInputValue: function () {
            document.getElementById('item-name').value = itemCtrl.data.currentItem.iname;
            document.getElementById('item-calories').value = itemCtrl.data.currentItem.calories;
        },

        showUpdatedList: function (updatedItem) {
            var allItem = document.querySelectorAll('.collection-item');
            allItem = Array.from(allItem);
            allItem.forEach(function (item) {
                id = item.getAttribute('id').split('-')[1];
                if (id == updatedItem.id) {
                    item.innerHTML = `
                        <strong>${updatedItem.iname}: </strong> <em>${updatedItem.calories} Calories</em>
                        <a href="#" class="secondary-content">
                        <i class="edit-item fa fa-pencil"></i>
                        </a>
                `
                }
            })
            itemCtrl.updateCalories();
            this.hideButton();
            this.clearInput();
        },

        deleteFromUi: function (id) {
            var itemId = `item-${id}`;
            document.getElementById(itemId).remove();
            itemCtrl.updateCalories();
            this.hideButton();
            this.clearInput();
        },

        deleteAllItemsFromUi: function () {
            var items = document.getElementById('item-list').childNodes;
            var itemsArr = Array.from(items);
            itemsArr.forEach(i => {
                i.remove();
            });
            itemCtrl.updateCalories();
            document.getElementById('item-list').style.display = 'none';
        },

        hideButton: function () {
            document.querySelector('.update-btn').style.display = 'none';
            document.querySelector('.delete-btn').style.display = 'none';
            document.querySelector('.add-btn').style.display = 'inline';
        },
        showButton: function () {
            document.querySelector('.update-btn').style.display = 'inline';
            document.querySelector('.delete-btn').style.display = 'inline';
            document.querySelector('.add-btn').style.display = 'none';
        }
    }
})();




const App = (function (itemCtrl, uiCtrl, LocalStorage) {
    const items = itemCtrl.getItem();

    const addData = function (e) {
        const meal = document.getElementById('item-name').value;
        const cal = document.getElementById('item-calories').value;

        if (meal !== '' && cal !== '') {
            var newItem = itemCtrl.addItem(meal, cal);
            uiCtrl.displyOnScreen(newItem);
            itemCtrl.updateCalories();
            LocalStorage.addToLocalStorage(newItem);
            uiCtrl.clearInput();
        }

        e.preventDefault();
    }

    document.addEventListener('keypress', function (e) {
        if (e.keyCode === 13 || e.which === 13) {
            e.preventDefault();
            return false;
        }
    });

    const getValue = function (e) {
        if (e.target.classList.contains('edit-item')) {
            uiCtrl.showButton();

            //Set the currentitem
            li = e.target.parentNode.parentNode;
            editId = li.id.split('-');
            itemCtrl.setCurrentItem(editId[1]);

            //Show the value in the inputs
            uiCtrl.showInputValue();
        }
        e.preventDefault()
    }

    const updateItem = function (e) {
        const upmeal = document.getElementById('item-name').value;
        const upcal = Number(document.getElementById('item-calories').value);

        var updatedItem = itemCtrl.updateItem(upmeal, upcal);
        uiCtrl.showUpdatedList(updatedItem);
        LocalStorage.updateLocalStorage(updatedItem);

        e.preventDefault();
    }

    const deleteItem = function (e) {
        itemCtrl.deleteFromDatabase();
        uiCtrl.deleteFromUi(itemCtrl.data.currentItem.id);
        LocalStorage.deleteFromLocalStorage(itemCtrl.data.currentItem.id);

        e.preventDefault();
    }

    const removeItems = function (e) {
        itemCtrl.deleteAllItems();
        uiCtrl.deleteAllItemsFromUi();
        LocalStorage.removeAllData();

        e.preventDefault();
    }

    document.getElementById('item-list').addEventListener('click', getValue);
    document.querySelector('.update-btn').addEventListener('click', updateItem);
    document.querySelector('.delete-btn').addEventListener('click', deleteItem);
    document.querySelector('.clear-btn').addEventListener('click', removeItems);

    return {
        display: function () {

            if (items.length !== 0) {
                uiCtrl.showItem(items);

                //Calculate the calories
                var totalCalories = itemCtrl.calCalories();
                uiCtrl.showCalories(totalCalories);
            } else {
                document.getElementById('item-list').style.display = 'none';
            }

            document.querySelector('.add-btn').addEventListener('click', addData);
            //hide the update and delete button
            uiCtrl.hideButton();

        }
    }
})(itemCtrl, uiCtrl, LocalStorage);

App.display()