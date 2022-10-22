<template>
    <div>
        <h1>Hello Vue</h1>
        <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}.</p>
    </div>
</template>

<script>

export default {
    name: 'firstComponent',
    data() {
        return {
            nome: "Damien",
            profissao: "Programador"
        }
    }
}

</script>
