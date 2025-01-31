import {ref} from "vue";
export default function useListActions(items){
    const addItem = (newItem)=> {
        items.value.push(newItem);
    };

    const deleteItem = (id)=> {
        items.value = items.value.filter((item) => item.id !== id);
    };

    return {addItem, deleteItem};
}