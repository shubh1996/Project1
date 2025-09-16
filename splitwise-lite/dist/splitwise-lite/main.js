"use strict";
(self["webpackChunksplitwise_lite"] = self["webpackChunksplitwise_lite"] || []).push([[792],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class AppComponent {
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 0,
      consts: [[1, "container"], [1, "row", 2, "justify-content", "space-between", "align-items", "baseline"], [1, "title"], [1, "nav"], ["routerLink", "/", 1, "subtitle"], ["routerLink", "/groups", 1, "subtitle"], ["routerLink", "/add", 1, "subtitle"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Splitwise Lite");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Groups");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add Expense");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 2838:
/*!*******************************************!*\
  !*** ./src/app/pages/add-expense.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddExpensePage: () => (/* binding */ AddExpensePage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state.service */ 2914);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);







function AddExpensePage_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const g_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", g_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](g_r1.name);
  }
}
function AddExpensePage_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", u_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r2.name);
  }
}
function AddExpensePage_label_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 16)(1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddExpensePage_label_27_Template_input_change_1_listener($event) {
      const u_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.toggleIncluded(u_r4.id, $event.target == null ? null : $event.target.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r4 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r4.selectedMemberIds().includes(u_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", u_r4.name, " ");
  }
}
function AddExpensePage_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fill all fields and include at least one member.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class AddExpensePage {
  constructor(state, router) {
    this.state = state;
    this.router = router;
    this.description = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('');
    this.amountStr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('');
    this.groupId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('');
    this.paidByUserId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('');
    this.selectedMemberIds = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
    this.groups = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.state.state().groups);
    this.users = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.state.state().users);
    this.groupMembers = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      const g = this.state.getGroup(this.groupId());
      return g ? this.users().filter(u => g.memberIds.includes(u.id)) : [];
    });
    const g = this.state.state().groups[0];
    if (g) {
      this.groupId.set(g.id);
      this.selectedMemberIds.set([...g.memberIds]);
      this.paidByUserId.set(g.memberIds[0]);
    }
  }
  toggleIncluded(id, checked) {
    const set = new Set(this.selectedMemberIds());
    if (checked) set.add(id);else set.delete(id);
    this.selectedMemberIds.set([...set]);
  }
  formValid() {
    const amt = Number(this.amountStr());
    return this.description().trim().length > 0 && !isNaN(amt) && amt > 0 && this.groupId().length > 0 && this.paidByUserId().length > 0 && this.selectedMemberIds().length > 0;
  }
  submit() {
    if (!this.formValid()) return;
    this.state.addExpense({
      groupId: this.groupId(),
      description: this.description().trim(),
      paidByUserId: this.paidByUserId(),
      amount: Math.round(Number(this.amountStr()) * 100) / 100,
      splitMemberIds: this.selectedMemberIds()
    });
    this.router.navigate(['/groups', this.groupId()]);
  }
  static {
    this.ɵfac = function AddExpensePage_Factory(t) {
      return new (t || AddExpensePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_state_service__WEBPACK_IMPORTED_MODULE_0__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AddExpensePage,
      selectors: [["app-add-expense"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 32,
      vars: 9,
      consts: [[1, "card", "col", 2, "gap", "16px"], [1, "title"], [1, "row", 2, "gap", "16px"], [1, "col", 2, "flex", "1"], [1, "subtitle"], ["placeholder", "e.g. Groceries", 3, "ngModelChange", "ngModel"], [1, "col"], ["type", "number", "min", "0", "step", "0.01", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", 2, "flex-wrap", "wrap", "gap", "10px"], ["class", "row", "style", "gap: 6px;", 4, "ngFor", "ngForOf"], [1, "row", 2, "justify-content", "space-between"], ["class", "subtitle muted", 4, "ngIf"], [1, "primary", 3, "click", "disabled"], [3, "value"], [1, "row", 2, "gap", "6px"], ["type", "checkbox", 3, "change", "checked"], [1, "subtitle", "muted"]],
      template: function AddExpensePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add Expense");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddExpensePage_Template_input_ngModelChange_7_listener($event) {
            return ctx.description.set($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddExpensePage_Template_input_ngModelChange_11_listener($event) {
            return ctx.amountStr.set($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2)(13, "div", 6)(14, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Group");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddExpensePage_Template_select_ngModelChange_16_listener($event) {
            return ctx.groupId.set($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddExpensePage_option_17_Template, 2, 2, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6)(19, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Paid by");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "select", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddExpensePage_Template_select_ngModelChange_21_listener($event) {
            return ctx.paidByUserId.set($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AddExpensePage_option_22_Template, 2, 2, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 6)(24, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Included in split");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AddExpensePage_label_27_Template, 3, 2, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AddExpensePage_div_29_Template, 2, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddExpensePage_Template_button_click_30_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Save");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.description());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.amountStr());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.groupId());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.groups());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.paidByUserId());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.groupMembers());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.groupMembers());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.formValid());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.formValid());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 9180:
/*!*****************************************!*\
  !*** ./src/app/pages/dashboard.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardPage: () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ 8103);
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state.service */ 2914);






const _c0 = a0 => ["/groups", a0];
function DashboardPage_div_6_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r1 = ctx.$implicit;
    const g_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.userName(u_r1), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 2, ctx_r2.groupBalances(g_r2.id)[u_r1], "1.2-2"), " ");
  }
}
function DashboardPage_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div")(2, "div")(3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 10)(8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Net");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, DashboardPage_div_6_div_1_span_11_Template, 3, 5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const g_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, g_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](g_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", g_r2.memberIds.length, " members");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", g_r2.memberIds);
  }
}
function DashboardPage_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DashboardPage_div_6_div_1_Template, 12, 6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.groups());
  }
}
function DashboardPage_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No groups yet. Create one from the Groups tab.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class DashboardPage {
  constructor(state) {
    this.state = state;
    this.groups = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.state.state().groups);
    this.expenses = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.state.state().expenses);
  }
  userName(id) {
    return this.state.getUser(id)?.name ?? id;
  }
  groupBalances(groupId) {
    const group = this.state.getGroup(groupId);
    if (!group) return {};
    const expenses = this.expenses().filter(e => e.groupId === groupId);
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.calculateGroupBalances)(expenses, group.memberIds);
  }
  static {
    this.ɵfac = function DashboardPage_Factory(t) {
      return new (t || DashboardPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_state_service__WEBPACK_IMPORTED_MODULE_1__.StateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: DashboardPage,
      selectors: [["app-dashboard"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 2,
      consts: [["empty", ""], [1, "card"], [1, "row", 2, "justify-content", "space-between"], [1, "title"], ["routerLink", "/add", 1, "subtitle"], ["class", "list", 4, "ngIf", "ngIfElse"], [1, "list"], ["class", "row", "style", "justify-content: space-between;", 4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "muted", "subtitle"], [1, "col", 2, "align-items", "flex-end"], [1, "subtitle"], [1, "row", 2, "gap", "6px", "flex-wrap", "wrap"], ["class", "subtitle", 4, "ngFor", "ngForOf"]],
      template: function DashboardPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Overview");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Add Expense");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DashboardPage_div_6_Template, 2, 1, "div", 5)(7, DashboardPage_ng_template_7_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const empty_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.groups().length)("ngIfElse", empty_r4);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 3845:
/*!********************************************!*\
  !*** ./src/app/pages/group-detail.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupDetailPage: () => (/* binding */ GroupDetailPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ 8103);
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state.service */ 2914);







function GroupDetailPage_div_0_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r1.userName(u_r1), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 2, ctx_r1.balances()[u_r1], "1.2-2"), " ");
  }
}
function GroupDetailPage_div_0_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "div")(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const e_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", e_r3.description, " \u2022 ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind4"](4, 5, e_r3.amount, "USD", "symbol", "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" Paid by ", ctx_r1.userName(e_r3.paidByUserId), " on ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 10, e_r3.dateIso, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", e_r3.splitMemberIds.length, " split");
  }
}
function GroupDetailPage_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, GroupDetailPage_div_0_div_14_div_1_Template, 10, 13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.groupExpenses());
  }
}
function GroupDetailPage_div_0_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No expenses yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function GroupDetailPage_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Add Expense");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7)(7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Balances");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, GroupDetailPage_div_0_span_10_Template, 3, 5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11)(12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Recent expenses");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, GroupDetailPage_div_0_div_14_Template, 2, 1, "div", 12)(15, GroupDetailPage_div_0_ng_template_15_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const none_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_3_0 = ctx_r1.group()) == null ? null : tmp_3_0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.group().memberIds);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.groupExpenses().length)("ngIfElse", none_r4);
  }
}
function GroupDetailPage_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Group not found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class GroupDetailPage {
  constructor(route, state) {
    this.route = route;
    this.state = state;
    this.groupId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.route.snapshot.paramMap.get('groupId'));
    this.group = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.state.getGroup(this.groupId()));
    this.expenses = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.state.state().expenses);
    this.groupExpenses = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.expenses().filter(e => e.groupId === this.groupId()));
    this.balances = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
      const g = this.group();
      if (!g) return {};
      return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.calculateGroupBalances)(this.groupExpenses(), g.memberIds);
    });
  }
  userName(id) {
    return this.state.getUser(id)?.name ?? id;
  }
  static {
    this.ɵfac = function GroupDetailPage_Factory(t) {
      return new (t || GroupDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_state_service__WEBPACK_IMPORTED_MODULE_1__.StateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: GroupDetailPage,
      selectors: [["app-group-detail"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 2,
      consts: [["missing", ""], ["none", ""], ["class", "col", 4, "ngIf", "ngIfElse"], [1, "col"], [1, "row", 2, "justify-content", "space-between", "align-items", "baseline"], [1, "title"], ["routerLink", "/add", 1, "subtitle"], [1, "card"], [1, "subtitle"], [1, "row", 2, "gap", "16px", "flex-wrap", "wrap"], ["class", "subtitle", 4, "ngFor", "ngForOf"], [1, "card", "col"], ["class", "list", 4, "ngIf", "ngIfElse"], [1, "list"], ["class", "row", "style", "justify-content: space-between;", 4, "ngFor", "ngForOf"], [1, "row", 2, "justify-content", "space-between"], [1, "muted", "subtitle"]],
      template: function GroupDetailPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, GroupDetailPage_div_0_Template, 17, 4, "div", 2)(1, GroupDetailPage_ng_template_1_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const missing_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.group())("ngIfElse", missing_r5);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 8392:
/*!**************************************!*\
  !*** ./src/app/pages/groups.page.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupsPage: () => (/* binding */ GroupsPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state.service */ 2914);




const _c0 = a0 => ["/groups", a0];
function GroupsPage_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div")(2, "div")(3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const g_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, g_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](g_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", g_r1.memberIds.length, " members");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, g_r1.id));
  }
}
function GroupsPage_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GroupsPage_div_3_div_1_Template, 9, 8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.state.state().groups);
  }
}
function GroupsPage_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No groups yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class GroupsPage {
  constructor(state) {
    this.state = state;
  }
  static {
    this.ɵfac = function GroupsPage_Factory(t) {
      return new (t || GroupsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_state_service__WEBPACK_IMPORTED_MODULE_0__.StateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GroupsPage,
      selectors: [["app-groups"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 2,
      consts: [["empty", ""], [1, "card", "col"], [1, "title"], ["class", "list", 4, "ngIf", "ngIfElse"], [1, "list"], ["class", "row", "style", "justify-content: space-between;", 4, "ngFor", "ngForOf"], [1, "row", 2, "justify-content", "space-between"], [3, "routerLink"], [1, "subtitle", "muted"], [1, "subtitle", 3, "routerLink"], [1, "subtitle"]],
      template: function GroupsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Groups");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GroupsPage_div_3_Template, 2, 1, "div", 3)(4, GroupsPage_ng_template_4_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const empty_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.state.state().groups.length)("ngIfElse", empty_r3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 3150:
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_ROUTES: () => (/* binding */ APP_ROUTES)
/* harmony export */ });
/* harmony import */ var _pages_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dashboard.page */ 9180);
/* harmony import */ var _pages_groups_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/groups.page */ 8392);
/* harmony import */ var _pages_group_detail_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/group-detail.page */ 3845);
/* harmony import */ var _pages_add_expense_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/add-expense.page */ 2838);




const APP_ROUTES = [{
  path: '',
  component: _pages_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
}, {
  path: 'groups',
  component: _pages_groups_page__WEBPACK_IMPORTED_MODULE_1__.GroupsPage
}, {
  path: 'groups/:groupId',
  component: _pages_group_detail_page__WEBPACK_IMPORTED_MODULE_2__.GroupDetailPage
}, {
  path: 'add',
  component: _pages_add_expense_page__WEBPACK_IMPORTED_MODULE_3__.AddExpensePage
}, {
  path: '**',
  redirectTo: ''
}];

/***/ }),

/***/ 2914:
/*!**********************************!*\
  !*** ./src/app/state.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateService: () => (/* binding */ StateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 8103);



const STORAGE_KEY = 'splitwise-lite-state-v1';
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
class StateService {
  constructor() {
    this.stateSig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(loadState() ?? {
      users: [{
        id: 'u_alex',
        name: 'Alex'
      }, {
        id: 'u_bailey',
        name: 'Bailey'
      }, {
        id: 'u_casey',
        name: 'Casey'
      }],
      groups: [{
        id: 'g_home',
        name: 'Home',
        memberIds: ['u_alex', 'u_bailey', 'u_casey']
      }],
      expenses: []
    });
    this.state = this.stateSig.asReadonly();
  }
  persist() {
    saveState(this.stateSig());
  }
  addUser(name) {
    const user = {
      id: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateId)('u'),
      name
    };
    const next = {
      ...this.stateSig(),
      users: [...this.stateSig().users, user]
    };
    this.stateSig.set(next);
    this.persist();
    return user;
  }
  addGroup(name, memberIds) {
    const group = {
      id: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateId)('g'),
      name,
      memberIds: [...new Set(memberIds)]
    };
    const next = {
      ...this.stateSig(),
      groups: [...this.stateSig().groups, group]
    };
    this.stateSig.set(next);
    this.persist();
    return group;
  }
  addExpense(expense) {
    const full = {
      ...expense,
      id: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateId)('e'),
      dateIso: expense.dateIso ?? new Date().toISOString()
    };
    const next = {
      ...this.stateSig(),
      expenses: [full, ...this.stateSig().expenses]
    };
    this.stateSig.set(next);
    this.persist();
    return full;
  }
  getGroup(id) {
    return this.stateSig().groups.find(g => g.id === id);
  }
  getUser(id) {
    return this.stateSig().users.find(u => u.id === id);
  }
  static {
    this.ɵfac = function StateService_Factory(t) {
      return new (t || StateService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: StateService,
      factory: StateService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8103:
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateGroupBalances: () => (/* binding */ calculateGroupBalances),
/* harmony export */   generateId: () => (/* binding */ generateId)
/* harmony export */ });
function calculateGroupBalances(expenses, memberIds) {
  const balances = {};
  for (const memberId of memberIds) {
    balances[memberId] = 0;
  }
  for (const expense of expenses) {
    if (!memberIds.includes(expense.paidByUserId)) continue;
    const included = expense.splitMemberIds.filter(id => memberIds.includes(id));
    if (included.length === 0) continue;
    const share = expense.amount / included.length;
    // Payer paid the full amount; others owe their share
    for (const memberId of included) {
      if (memberId === expense.paidByUserId) {
        balances[memberId] += expense.amount - share; // net they are owed by others
      } else {
        balances[memberId] -= share; // they owe the payer
      }
    }
  }
  // Round to 2 decimals for display
  for (const id of Object.keys(balances)) {
    balances[id] = Math.round(balances[id] * 100) / 100;
  }
  return balances;
}
function generateId(prefix = 'id') {
  const rand = Math.random().toString(36).slice(2, 8);
  const ts = Date.now().toString(36).slice(-6);
  return `${prefix}_${ts}_${rand}`;
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/routes */ 3150);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);






(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_3__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_1__.APP_ROUTES), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.provideAnimations)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.provideHttpClient)()]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [502], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map