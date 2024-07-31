export default {
    template: `
      <form @submit.prevent="add">
        <div class="border border-gray-600 text-black">
          <input v-model="newAssignment" placeholder="New assignment..." class="p-2 w-5/6">
          <button type="submit" class="bg-white text-black p-2 border-l w-1/6">Add</button>
        </div>
      </form>
    `,
    data() {
        return {
            newAssignment: '',
        }
    },
    methods: {
        add(name) {
            /* this.assignments.push({
                 name: this.newAssignment,
                 complete: false,
                 id: this.assignments.length + 1
             });
             */
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
        }

    }
}