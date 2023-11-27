<template>
    <div class="">
        <span class="text-white" id="countdown"></span>
    </div>
</template>
<script setup>
import moment from "moment";

const emit = defineEmits(["timeEnd"]);
const props = defineProps({
    validUntil: {
        type: String,
        required: true,
    }
});
let timeInSecs = ref(0);
let timeTaken = ref(0);
let ticker = null;
function startTimer(secs) {
    timeInSecs.value = parseInt(secs);
    ticker = setInterval(tick, 1000);
}

function tick() {
    let secs = timeInSecs.value;
    if (secs > 0) {
        timeInSecs.value--;
        timeTaken.value++;
    } else {
        clearInterval(ticker);
        // startTimer(5 * 60); // 4 minutes in seconds
    }
    let mins = Math.floor(secs / 60);
    secs %= 60;
    let pretty = `Resend code in ${(mins < 10) ? "0" : ""}${mins}:${(secs < 10) ? "0" : ""}${secs}`;

    document.getElementById("countdown").innerHTML = pretty;
}

onMounted(() => {
    let duration = 5 * 60 || 0;
    if (props.validUntil) {
        duration = moment(props.validUntil).diff(moment(), 'seconds');
    }
    startTimer(duration);

    // startTimer(props.exam.duration * 60 || 0); // 5 minutes in seconds
});

watch(timeInSecs, (newValue) => {
    if (newValue === 0) {
        emit("timeEnd", true);
    }
});

watch(() => props.validUntil, (newVal, oldVal) => {
    if (newVal !== oldVal) {
        let duration = moment(newVal).diff(moment(), 'seconds');
        startTimer(duration);
    }
})

onUnmounted(() => {
    clearInterval(ticker);
});
</script>