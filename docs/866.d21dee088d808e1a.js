"use strict";(self.webpackChunkng_cert_nba=self.webpackChunkng_cert_nba||[]).push([[866],{9866:(it,Z,i)=>{i.r(Z),i.d(Z,{TeamTrackingModule:()=>ot});var m=i(6895),d=i(5580),l=i(4006),g=i(727),t=i(4650),u=i(8527),f=i(529),h=i(4482),x=i(2733),O=i(515),p=i(4004),M=i(7359);function y(a,s){return(0,h.e)((0,M.U)(a,s,arguments.length>=2,!1,!0))}var I=i(8505),_=i(262),F=i(3900),Q=i(4351),D=i(9646);const E=(a,s)=>(a.push(s),a);var Y=i(2843);let L=(()=>{class a{constructor(){}handleError(e){return 0===e.status?console.error("An error occurred:",e.error):console.error(`Backend returned code ${e.status}, body was: `,e.error),(0,Y._)(()=>new Error("Something bad happened; please try again later."))}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),T=(()=>{class a{constructor(e,n,o,r){this.http=e,this.store=n,this.datePipe=o,this.coreService=r,this._httpOptions={headers:new f.WM({"X-RapidAPI-Key":"2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX","X-RapidAPI-Host":"free-nba.p.rapidapi.com"})},this._TEAM_IDS="teamIds"}readTeamIds(){let e=this.getTeamIds();return e&&this.store.setTeamIds(e),this.store.getTeamIds()}addTeamId(e){let n=this.getTeamIds();n.includes(e)||(this.store.setTeamIds([...n,e]),localStorage.setItem(this._TEAM_IDS,[...n,e].join(",")))}deleteTeamId(e){let n=this.getTeamIds();n=n.filter(o=>o!==e),this.store.setTeamIds(n),n.length?localStorage.setItem(this._TEAM_IDS,n.join(",")):localStorage.removeItem(this._TEAM_IDS)}getTeamIds(){return(localStorage.getItem(this._TEAM_IDS)?.split(",")||[]).map(e=>parseInt(e,10))}getAllTeams(){return this.getTeams(1).pipe(function U(a,s=1/0,e){return s=(s||0)<1?1/0:s,(0,h.e)((n,o)=>(0,x.p)(n,o,a,s,void 0,!0,e))}(e=>e.meta.next_page?this.getTeams(e.meta.next_page):O.E),(0,p.U)(e=>e.data.filter(n=>n.city)),y((e,n)=>e.concat(n),[]),(0,I.b)(e=>this.store.setTeams(e)))}getTeams(e){return this.http.get(`https://free-nba.p.rapidapi.com/teams?page=${e}`,this._httpOptions).pipe((0,_.K)(this.coreService.handleError))}getGames(e){let n=new f.LE;return n=n.append("page",0),n=n.append("team_ids[]",e),[...Array(12)].map((r,S)=>{const b=new Date;return b.setDate(b.getDate()-S),this.datePipe.transform(b,"yyyy-MM-dd")}).forEach(r=>{n=n.append("dates[]",r)}),this.http.get("https://free-nba.p.rapidapi.com/games",{params:n,headers:this._httpOptions.headers}).pipe((0,p.U)(r=>r.data),(0,F.w)(r=>r),(0,Q.b)(r=>(0,D.of)({...r,team_id:e})),function J(){return(0,h.e)((a,s)=>{y(E,[])(a).subscribe(s)})}(),(0,I.b)(r=>this.store.setGames(e,r)),(0,_.K)(this.coreService.handleError))}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(f.eN),t.LFG(u.y),t.LFG(m.uU),t.LFG(L))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var v=i(4859),C=i(7676),$=i(6413),k=i(3238),c=i(3546),A=i(4850),R=i(7392);function B(a,s){1&a&&(t.ynx(0),t.TgZ(1,"span",13),t._uU(2,"W"),t.qZA(),t.BQk())}function G(a,s){1&a&&(t.ynx(0),t.TgZ(1,"span",14),t._uU(2,"L"),t.qZA(),t.BQk())}function N(a,s){1&a&&(t.ynx(0),t.TgZ(1,"span",15),t._uU(2,"D"),t.qZA(),t.BQk())}function P(a,s){if(1&a&&(t.ynx(0),t.YNc(1,B,3,0,"ng-container",12),t.YNc(2,G,3,0,"ng-container",12),t.YNc(3,N,3,0,"ng-container",12),t.BQk()),2&a){const e=s.$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.getScoreDiff(e)>0),t.xp6(1),t.Q6J("ngIf",n.getScoreDiff(e)<0),t.xp6(1),t.Q6J("ngIf",0==n.getScoreDiff(e))}}function j(a,s){if(1&a&&(t.TgZ(0,"div",10)(1,"div"),t._uU(2,"Results for the past 12 days:"),t.qZA(),t.YNc(3,P,4,3,"ng-container",11),t.ALo(4,"async"),t.TgZ(5,"div",0),t._uU(6,"Avg pts scored: "),t.TgZ(7,"b"),t._uU(8),t.ALo(9,"number"),t.qZA()(),t.TgZ(10,"div",3),t._uU(11,"Avg pts conceded: "),t.TgZ(12,"b"),t._uU(13),t.ALo(14,"number"),t.qZA()()()),2&a){const e=t.oxw();t.xp6(3),t.Q6J("ngForOf",t.lcZ(4,3,e.games$)),t.xp6(5),t.Oqu(t.xi3(9,5,e.avgPointsScored,"1.0-0")),t.xp6(5),t.Oqu(t.xi3(14,8,e.avgPointsConceded,"1.0-0"))}}function w(a,s){1&a&&(t.TgZ(0,"div",10),t._uU(1,"No results for the past 12 days"),t.qZA())}let H=(()=>{class a{constructor(e,n){this.store=e,this.teamService=n,this.subscriptions=new g.w0}ngOnInit(){this.games$=this.store.getGames().pipe((0,p.U)(e=>e[this.team.id])),this.subscriptions.add(this.teamService.getGames(this.team.id).subscribe()),this.subscriptions.add(this.store.getGames().pipe((0,p.U)(e=>e[this.team.id])).subscribe(e=>this.calAvgPoints(e)))}remove(){this.teamService.deleteTeamId(this.team.id)}get icon(){return`https://interstate21.com/nba-logos/${this.team.abbreviation}.png`}getScoreDiff(e){return this.isHomeTeam(e)?e.home_team_score-e.visitor_team_score:e.visitor_team_score-e.home_team_score}calAvgPoints(e){let n=0,o=0;e&&(e.forEach((r,S)=>{this.isHomeTeam(r)?(n+=r.home_team_score,o+=r.visitor_team_score):(n+=r.visitor_team_score,o+=r.home_team_score)}),this.avgPointsScored=n/e.length,this.avgPointsConceded=o/e.length)}isHomeTeam(e){return e.team_id==e.home_team.id}ngOnDestroy(){this.subscriptions.unsubscribe()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(u.y),t.Y36(T))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-team-card"]],inputs:{team:"team"},decls:20,vars:11,consts:[[1,"pt-3"],["mat-button","","color","primary","aria-label","Remove Team","title","Remove Team",2,"float","right",3,"id","click"],["fontIcon","close"],[1,"pb-3"],[1,"row"],["class","col-md-3 pb-3",4,"ngIf","ngIfElse"],["no_results",""],[1,"col-md-9"],[1,"icon",3,"src"],["mat-raised-button","","color","primary","aria-label","See game results","title","See game results",3,"id","routerLink"],[1,"col-md-3","pb-3"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"results",2,"color","green"],[1,"results",2,"color","red"],[1,"results",2,"color","black"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"mat-card")(2,"mat-card-title"),t._uU(3),t.TgZ(4,"button",1),t.NdJ("click",function(){return n.remove()}),t._UZ(5,"mat-icon",2),t.qZA()(),t.TgZ(6,"mat-card-subtitle"),t._uU(7),t.qZA(),t.TgZ(8,"mat-card-content"),t._UZ(9,"mat-divider",3),t.TgZ(10,"div",4),t.YNc(11,j,15,11,"div",5),t.ALo(12,"async"),t.YNc(13,w,2,0,"ng-template",null,6,t.W1O),t.TgZ(15,"div",7),t._UZ(16,"img",8),t.qZA()()(),t.TgZ(17,"mat-card-actions")(18,"button",9),t._uU(19," See game results >> "),t.qZA()()()()),2&e){const o=t.MAs(14);let r;t.xp6(3),t.AsE(" ",n.team.city," [",n.team.abbreviation,"] "),t.xp6(1),t.MGl("id","remove",n.team.abbreviation,""),t.xp6(3),t.hij("",n.team.conference,"ern Conference"),t.xp6(4),t.Q6J("ngIf",!(null==(r=t.lcZ(12,9,n.games$))||!r.length))("ngIfElse",o),t.xp6(5),t.Q6J("src",n.icon,t.LSH),t.xp6(2),t.MGl("id","results",n.team.abbreviation,"")("routerLink","./results/",n.team.abbreviation,"")}},dependencies:[m.sg,m.O5,v.lW,c.a8,c.dn,c.n5,c.$j,c.hq,A.d,R.Hw,d.rH,m.Ov,m.JJ],styles:[".icon[_ngcontent-%COMP%]{width:150px;height:150px}.results[_ngcontent-%COMP%]{font-weight:700;padding-right:10px}"],changeDetection:0}),a})();const q=["formDirective"];function X(a,s){if(1&a&&(t.TgZ(0,"mat-option",10),t._uU(1),t.qZA()),2&a){const e=s.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.city," ")}}function W(a,s){if(1&a&&t._UZ(0,"app-team-card",12),2&a){const e=t.oxw().$implicit,n=t.oxw();t.Q6J("team",n.teamsMap[e])}}function z(a,s){if(1&a&&(t.ynx(0),t.YNc(1,W,1,1,"app-team-card",11),t.BQk()),2&a){const e=s.$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.teamsMap[e])}}function V(a,s){if(1&a&&(t.ynx(0),t.TgZ(1,"div",0)(2,"b"),t._uU(3),t.qZA(),t._uU(4),t.TgZ(5,"b"),t._uU(6),t.qZA()(),t.BQk()),2&a){const e=s.$implicit;t.xp6(3),t.Oqu(e.home_team.abbreviation),t.xp6(1),t.AsE(" ",e.home_team_score," - ",e.visitor_team_score," "),t.xp6(2),t.Oqu(e.visitor_team.abbreviation)}}function tt(a,s){if(1&a&&(t.TgZ(0,"div")(1,"div",0),t._uU(2,"Scores of past 12 days:"),t.qZA(),t.YNc(3,V,7,4,"ng-container",4),t.ALo(4,"async"),t.qZA()),2&a){const e=t.oxw();t.xp6(3),t.Q6J("ngForOf",t.lcZ(4,1,e.games$))}}function et(a,s){1&a&&t._uU(0," No results for the past 12 days ")}const at=[{path:"",component:(()=>{class a{constructor(e,n,o){this.fb=e,this.store=n,this.teamService=o,this.subscriptions=new g.w0,this.form=this.fb.group({teamId:["",l.kI.required]}),this.teamsMap={}}ngOnInit(){this.teamIds$=this.teamService.readTeamIds(),this.teams$=this.store.getTeams(),this.subscriptions.add(this.teamService.getAllTeams().subscribe()),this.subscriptions.add(this.store.getTeams().subscribe(e=>e.forEach(n=>this.teamsMap[n.id]=n)))}submit(){this.form.valid?(this.teamService.addTeamId(this.form.value.teamId),this.form.get("teamId")?.patchValue(""),this.formDirective.resetForm()):alert("Please select a team")}ngOnDestroy(){this.subscriptions.unsubscribe()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(l.qu),t.Y36(u.y),t.Y36(T))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-team-tracking"]],viewQuery:function(e,n){if(1&e&&t.Gf(q,5),2&e){let o;t.iGM(o=t.CRH())&&(n.formDirective=o.first)}},decls:17,vars:8,consts:[[1,"container-fluid"],[1,"formGroup",3,"formGroup","ngSubmit"],["formDirective","ngForm"],[1,"row","pb-3"],["appearance","fill","floatLabel","always",1,"pr-2"],["id","teamSelect","formControlName","teamId","placeholder","Select a team",3,"required"],[3,"value",4,"ngFor","ngForOf"],["id","trackBtn","mat-raised-button","","color","primary","type","submit"],[1,"row"],[4,"ngFor","ngForOf"],[3,"value"],["class","col-md-6",3,"team",4,"ngIf"],[1,"col-md-6",3,"team"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"form",1,2),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(3,"div",3)(4,"div")(5,"mat-form-field",4)(6,"mat-label"),t._uU(7,"Team"),t.qZA(),t.TgZ(8,"mat-select",5),t.YNc(9,X,2,2,"mat-option",6),t.ALo(10,"async"),t.qZA()()(),t.TgZ(11,"div")(12,"button",7),t._uU(13,"Track Team"),t.qZA()()()(),t.TgZ(14,"div",8),t.YNc(15,z,2,1,"ng-container",9),t.ALo(16,"async"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("formGroup",n.form),t.xp6(7),t.Q6J("required",!0),t.xp6(1),t.Q6J("ngForOf",t.lcZ(10,4,n.teams$)),t.xp6(6),t.Q6J("ngForOf",t.lcZ(16,6,n.teamIds$)))},dependencies:[m.sg,m.O5,l._Y,l.JJ,l.JL,l.Q7,l.sg,l.u,v.lW,C.KE,C.hX,$.gD,k.ey,H,m.Ov],changeDetection:0}),a})()},{path:"results/:teamCode",component:(()=>{class a{constructor(e,n,o,r){this.router=e,this.route=n,this.store=o,this.teamService=r,this.subscriptions=new g.w0}ngOnInit(){this.teamCode=`${this.route.snapshot.paramMap.get("teamCode")}`,this.subscriptions.add(this.store.getTeams().subscribe(e=>{const n=e.find(o=>o.abbreviation==this.teamCode);null!=n?(this.team=n,this.games$=this.store.getGames().pipe((0,p.U)(o=>o[this.team.id])),this.subscriptions.add(this.teamService.getGames(this.team.id).subscribe())):this.router.navigateByUrl("/team-tracking")}))}ngOnDestroy(){this.subscriptions.unsubscribe()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(d.F0),t.Y36(d.gz),t.Y36(u.y),t.Y36(T))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-team-results"]],decls:14,vars:7,consts:[[1,"pb-3"],[4,"ngIf","ngIfElse"],["no_results",""],["id","backBtn","mat-raised-button","","routerLink","/team-tracking","color","primary","aria-label","Back to all team stats","title","Back to all team stats"],[4,"ngFor","ngForOf"]],template:function(e,n){if(1&e&&(t.TgZ(0,"mat-card")(1,"mat-card-title"),t._uU(2),t.qZA(),t.TgZ(3,"mat-card-subtitle"),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-content"),t._UZ(6,"mat-divider",0),t.YNc(7,tt,5,3,"div",1),t.ALo(8,"async"),t.YNc(9,et,1,0,"ng-template",null,2,t.W1O),t.qZA(),t.TgZ(11,"mat-card-actions")(12,"button",3),t._uU(13," << Back to all team stats "),t.qZA()()()),2&e){const o=t.MAs(10);let r;t.xp6(2),t.AsE(" ",n.team.city," [",n.team.abbreviation,"] "),t.xp6(2),t.hij("",n.team.conference,"ern Conference"),t.xp6(3),t.Q6J("ngIf",!(null==(r=t.lcZ(8,5,n.games$))||!r.length))("ngIfElse",o)}},dependencies:[m.sg,m.O5,v.lW,c.a8,c.dn,c.n5,c.$j,c.hq,A.d,d.rH,m.Ov],changeDetection:0}),a})()}];let nt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[d.Bz.forChild(at),d.Bz]}),a})();var st=i(4466);let ot=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[m.ez,st.m,nt]}),a})()}}]);