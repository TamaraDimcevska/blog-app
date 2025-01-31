import { ref, onMounted } from "vue";
import { createClient } from "contentful";
import useListActions from "./useListActions.js";

const client = createClient({
    space: "jbem5mn3le3x",
    accessToken: "FhrIg0w28L4LCibB120nUZ8cUImWr7UESue-Y1dCjfk",
});

export default function useBlogs() {
    const blogs = ref([]);
    const isLoading = ref(true);
    const error = ref(null);

    const { addItem, deleteItem } = useListActions(blogs);

    onMounted(async () =>{
        try{
            const response = await client.getEntries({ content_type: "blogPost"});
            blogs.value = response.items.map((item)=> ({
                id: item.sys.id,
                title: item.fields.title,
                description: item.fields.description,
                heroImage: item.fields.heroImage?.fields.file.url,
                publishDate: item.fields.publishDate,
            }));
        }catch (err){
            error.value = err.message;
        }finally {
            isLoading.value = false;
        }
    });
    return { blogs, isLoading, error, addItem, deleteItem};
}
