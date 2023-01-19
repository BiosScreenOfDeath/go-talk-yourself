<script>
// MAKE MESSAGES SUPPORT DYNAMIC CREATION!!

export default {
    props: ['message'],
    template: `
        <li style="list-style:none;">{{this.message}}</li>
    `,
    data() {
        return {}
    }
}
</script>