import { ref, computed } from "vue";

export default function useSearch(items) {
    const searchTerm = ref("");
    const filters = ref(["title"]);

    const filteredItems = computed(() => {
        return items.value.filter((item) =>
            filters.value.some((filter) =>
                String(item[filter] || "").toLowerCase().includes(searchTerm.value.toLowerCase())
            )
        );
    });

    return { searchTerm, filters, filteredItems };
}