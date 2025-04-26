<script lang="ts">
    import type { PageProps } from './$types'

    let { data }: PageProps = $props();
    $inspect(data);
</script>

<h1>{data.text}</h1>