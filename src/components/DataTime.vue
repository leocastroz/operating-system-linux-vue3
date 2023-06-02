<template>
	<div>
		<p>{{ diaAtual }}</p>
		<p>{{ dataAtual }}</p>
		<p>{{ horaAtual }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			diaAtual: '',
			dataAtual: '',
			horaAtual: ''
		};
	},
	mounted() {
		this.getDateTime()
		setInterval(this.getDateTime, 1000)
	},
	methods: {
		getDateTime() {
			const dataHoraAtual = new Date()
			const options = { year: 'numeric', month: 'long', day: 'numeric' }
			this.diaAtual = dataHoraAtual.toLocaleDateString('en-US', { weekday: 'long' })
			this.dataAtual = dataHoraAtual.toLocaleDateString('en-US', options)
			this.horaAtual = dataHoraAtual.toLocaleTimeString('en-US')
		}
	}
}
</script>

<style scoped>
div {
	display: flex;
}

div p {
	margin: 0 10px;
}
</style>
