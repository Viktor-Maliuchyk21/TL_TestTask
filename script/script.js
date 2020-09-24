function changePlan(yearlyPlanStatus) {
    const weeklyPlan = document.getElementById('weeklyPlan');
    const yearPlan = document.getElementById('yearPlan');

    if (!yearlyPlanStatus) {
        yearPlan.classList.remove('selected');
        weeklyPlan.classList.add('selected');
    } else {
        weeklyPlan.classList.remove('selected');
        yearPlan.classList.add('selected');
    }
}