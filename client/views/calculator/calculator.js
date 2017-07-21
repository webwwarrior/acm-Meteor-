Template.calculator.onCreated(function(){
	this.subscribe('boxes');
});

Template.calculator.helpers({
	box: function(){
		return Boxes.find({}, { sort : { position: 1 }} )
	}
});

// Template.calculator.onRendered(function(){
// 	var sac_capacity = 1300;
// 		var sba_capacity = 650;
// 		var tds = document.getElementById('tp-tds');
// 		var cond = document.getElementById('tp-cond');
// 		var co2 = document.getElementById('tp-co2');
// 		var sio2 = document.getElementById('tp-sio2');
// 		var sac = document.getElementById('tp-sac');
// 		var sba = document.getElementById('tp-sba');
// 		var mxb6040 = document.getElementById('tp-mxb-6040');
// 		var mxb5050 = document.getElementById('tp-mxb-5050');
// 		var reset = document.getElementById('reset');
// 		var co2_sio2_total = null;
// 		var cond_total = null;
// 		var sac_load = null;
// 		var sba_load = null;
// 		var sac_avg = null;
// 		var sba_avg = null;
// 		var mxb6040_avg = null;
// 		var mxb5050_avg = null;

// 		reset.onclick = function() {
// 			clear_values();
// 			clearErrors();
// 		};

// 		function clear_values() {
// 			tds.removeAttribute('disabled');
// 			cond.removeAttribute('disabled');
// 			co2_sio2_total = null;
// 			cond_total = null;
// 			sac_load = null;
// 			sba_load = null;
// 			sac_avg = null;
// 			sba_avg = null;
// 			mxb6040_avg = null;
// 			mxb5050_avg = null;
// 		}

// 		function setNA() {
// 			sac.innerHTML = 'NA';
// 			sba.innerHTML = 'NA';
// 			mxb6040.innerHTML = 'NA';
// 			mxb5050.innerHTML = 'NA';
// 		}

// 		function clearErrors() {
// 			tds.parentElement.className = '';
// 			cond.parentElement.className = '';
// 			co2.parentElement.className = '';
// 			sio2.parentElement.className = '';
// 		}

// 		function calc_co2_sio2_total() {
// 			if(!isNaN(co2.value) || !isNaN(sio2.value)) {
// 				co2_sio2_total = (co2.value/44) + (sio2.value/60.1);
// 			}
// 			else if(isNaN(co2.value) && !isNaN(sio2.value)) {
// 				co2_sio2_total = sio2.value/60.1;
// 			}
// 			else if(!isNaN(co2.value) && isNaN(sio2.value)) {
// 				co2_sio2_total = co2.value/44;
// 			}
// 			else {
// 				co2_sio2_total = 0;
// 			}
// 		}

// 		function calc_cond_total(input_type) {
// 			if(input_type === 'tds' && !isNaN(tds.value)) {
// 				cond_total = (tds.value * 2.53) / (2.53 * 50);	
// 			}
// 			else if(input_type === 'cond' && !isNaN(cond.value)) {
// 				cond_total = (cond.value / (2.53 * 50));	
// 			}
// 		}

// 		function calc_sac_load() {
// 			if(cond_total) {
// 				sac_load = cond_total;
// 			}
// 		}

// 		function calc_sba_load() {
// 			if(cond_total && !isNaN(co2_sio2_total)) {
// 				sba_load = cond_total + co2_sio2_total;
// 			}
// 		}

// 		function calc_avgs() {
// 			if(sac_load && sba_load) {
// 				sac_avg = Math.round(sac_capacity/sac_load*7.5);
// 				sac.innerHTML =sac_avg;
// 				sba_avg = Math.round(sba_capacity/sba_load*7.5);
// 				sba.innerHTML = sba_avg;
// 				mxb6040_avg = Math.round(sba_avg * 0.6);
// 				mxb6040.innerHTML = mxb6040_avg;
// 				mxb5050_avg = Math.round(sba_avg * 0.5);
// 				mxb5050.innerHTML = mxb5050_avg;
// 			}
// 		}

// 		function perform_calcs(input_type) {
// 			calc_co2_sio2_total();
// 			calc_cond_total(input_type);
// 			calc_sac_load();
// 			calc_sba_load();
// 			calc_avgs();
// 		}


// 		tds.onkeyup = function() {
// 			if(tds.value === '') {
// 				tds.parentElement.className = '';
// 				clear_values();
// 				setNA();
// 			}
// 			else if(isNaN(tds.value)) {
// 				setNA();
// 				tds.parentElement.className = 'has-error';
// 			}
// 			else {
// 				tds.parentElement.className = '';
// 				cond.setAttribute('disabled', 'disabled');
// 				perform_calcs('tds');
// 			}
// 		};

// 		cond.onkeyup = function() {
// 			if(cond.value === '') {
// 				cond.parentElement.className = '';
// 				clear_values();
// 				setNA();
// 			}
// 			else if(isNaN(tds.value)) {
// 				setNA();
// 				cond.parentElement.className = 'has-error';
// 			}
// 			else {
// 				cond.parentElement.className = '';
// 				tds.setAttribute('disabled', 'disabled');
// 				perform_calcs('cond');
// 			}
// 		};

// 		co2.onkeyup = function() {
// 			if(tds.value || cond.value) {
// 				if(isNaN(co2.value)) {
// 					setNA();
// 					co2.parentElement.className = 'has-error';
// 				}
// 				else {
// 					co2.parentElement.className = '';
// 					var input_type = tds.hasAttribute('disabled') ? 'cond' : 'tds';
// 					perform_calcs(input_type);
// 				}
// 			}
// 		};

// 		sio2.onkeyup = function() {
// 			if(tds.value || cond.value) {
// 				if(isNaN(sio2.value)) {
// 					setNA();
// 					sio2.parentElement.className = 'has-error';
// 				}
// 				else {
// 					sio2.parentElement.className = '';
// 					var input_type = tds.hasAttribute('disabled') ? 'cond' : 'tds';
// 					perform_calcs(input_type);
// 				}
// 			}
// 		};
// });
