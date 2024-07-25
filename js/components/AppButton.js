export default {
    template: `
    <button 
        :class="{
            'border rounded px-5 py-2 mx-2 disabled:cursor-not-allowed': true,
            'bg-blue-600 hover:bg-blue-700': type === 'primary',
            'bg-orange-400 hover:bg-orange-500': type === 'secundary',
            'bg-gray-200 hover:bg-gray-400': type === 'muted',
            'is-loading': processing
            
        }" 
        :disabled="processing">
        <slot />    
    </button>
    `,
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        },
    },


}