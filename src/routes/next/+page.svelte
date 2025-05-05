<script lang="ts">
    import type { PageProps } from './$types'

    let { data }: PageProps = $props();
    $inspect(data);
    let users = data.user
</script>

<h1>First user: {users[0].name}</h1>