"use strict";(self.webpackChunkng_cert_nba=self.webpackChunkng_cert_nba||[]).push([[655],{6655:(vt,x,r)=>{r.r(x),r.d(x,{TeamTrackingModule:()=>Tt});var c=r(6895),u=r(5580),p=r(4006),v=r(727),t=r(4650),f=r(8527),_=r(529),h=r(4482),M=r(2733),F=r(515),T=r(4004),Q=r(7359);function A(n,o){return(0,h.e)((0,Q.U)(n,o,arguments.length>=2,!1,!0))}var C=r(8505),b=r(262),y=r(3900),Y=r(9300);const D=(n,o)=>(n.push(o),n);var J=r(2843);let N=(()=>{class n{constructor(){}handleError(e){return 0===e.status?console.error("An error occurred:",e.error):console.error(`Backend returned code ${e.status}, body was: `,e.error),(0,J._)(()=>new Error("Something bad happened; please try again later."))}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),I=(()=>{class n{constructor(e,a,s,i){this.http=e,this.store=a,this.datePipe=s,this.coreService=i,this._httpOptions={headers:new _.WM({"X-RapidAPI-Key":"2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX","X-RapidAPI-Host":"free-nba.p.rapidapi.com"})},this._TEAM_IDS="teamIds"}readTeamIds(){const e=this.getTeamIds();return e&&this.store.setTeamIds(e),this.store.getTeamIds()}addTeamId(e){const a=this.getTeamIds();a.includes(e)||(this.store.setTeamIds([...a,e]),localStorage.setItem(this._TEAM_IDS,[...a,e].join(",")))}deleteTeamId(e){let a=this.getTeamIds();a=a.filter(s=>s!==e),this.store.setTeamIds(a),a.length?localStorage.setItem(this._TEAM_IDS,a.join(",")):localStorage.removeItem(this._TEAM_IDS)}getTeamIds(){return(localStorage.getItem(this._TEAM_IDS)?.split(",")||[]).map(e=>parseInt(e,10))}getAllTeams(){return this.getTeams(1).pipe(function E(n,o=1/0,e){return o=(o||0)<1?1/0:o,(0,h.e)((a,s)=>(0,M.p)(a,s,n,o,void 0,!0,e))}(e=>e.meta.next_page?this.getTeams(e.meta.next_page):F.E),(0,T.U)(e=>e.data.filter(a=>a.city)),A((e,a)=>e.concat(a),[]),(0,C.b)(e=>this.store.setTeams(e)))}getTeams(e){return this.http.get(`https://free-nba.p.rapidapi.com/teams?page=${e}`,this._httpOptions).pipe((0,b.K)(this.coreService.handleError))}getGames(e){let a=new _.LE;return a=a.append("page",0),a=a.append("team_ids[]",e),[...Array(12)].map((i,l)=>{const d=new Date;return d.setDate(d.getDate()-l),this.datePipe.transform(d,"yyyy-MM-dd")}).forEach(i=>{a=a.append("dates[]",i)}),this.http.get("https://free-nba.p.rapidapi.com/games",{params:a,headers:this._httpOptions.headers}).pipe((0,T.U)(i=>i.data),(0,y.w)(i=>i),(0,Y.h)(i=>i.home_team_score>0),function w(){return(0,h.e)((n,o)=>{A(D,[])(n).subscribe(o)})}(),(0,C.b)(i=>this.store.setGames(e,i)),(0,b.K)(this.coreService.handleError))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(_.eN),t.LFG(f.y),t.LFG(c.uU),t.LFG(N))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var Z=r(4859),S=r(7676),R=r(6217),k=r(3238),O=r(1572),G=r(5403);function $(n,o){return(0,h.e)(function B(n,o,e){const a="index"===e;return(s,i)=>{let l=0;s.subscribe((0,G.x)(i,d=>{const g=l++;n.call(o,d,g,s)&&(i.next(a?g:d),i.complete())},()=>{i.next(a?-1:void 0),i.complete()}))}}(n,o,"value"))}var m=r(3546),L=r(4850),P=r(7392);function W(n,o){1&n&&(t.ynx(0),t._UZ(1,"span",18),t.BQk())}function j(n,o){1&n&&(t.ynx(0),t._UZ(1,"span",19),t.BQk())}function H(n,o){1&n&&(t.ynx(0),t._UZ(1,"span",20),t.BQk())}function K(n,o){if(1&n&&(t.ynx(0)(1,15),t.YNc(2,W,2,0,"ng-container",16),t.YNc(3,j,2,0,"ng-container",16),t.YNc(4,H,2,0,"ng-container",17),t.BQk()()),2&n){const e=o.$implicit,a=t.oxw(3);t.xp6(1),t.Q6J("ngSwitch",a.getGameResult(e)),t.xp6(1),t.Q6J("ngSwitchCase","W"),t.xp6(1),t.Q6J("ngSwitchCase","L")}}function X(n,o){if(1&n&&(t.TgZ(0,"div",12)(1,"div",13),t._uU(2,"Results for the past 12 days:"),t.qZA(),t.YNc(3,K,5,3,"ng-container",14),t.ALo(4,"async"),t.TgZ(5,"div",2),t._uU(6,"Avg pts scored: "),t.TgZ(7,"b"),t._uU(8),t.ALo(9,"number"),t.ALo(10,"async"),t.qZA()(),t.TgZ(11,"div",5),t._uU(12,"Avg pts conceded: "),t.TgZ(13,"b"),t._uU(14),t.ALo(15,"number"),t.ALo(16,"async"),t.qZA()()()),2&n){const e=t.oxw(2);t.xp6(3),t.Q6J("ngForOf",t.lcZ(4,3,e.games$)),t.xp6(5),t.Oqu(t.xi3(9,5,e.getAvgPoints(t.lcZ(10,8,e.games$),!0),"1.0-0")),t.xp6(6),t.Oqu(t.xi3(15,10,e.getAvgPoints(t.lcZ(16,13,e.games$),!1),"1.0-0"))}}function z(n,o){1&n&&(t.TgZ(0,"div",12),t._uU(1,"No results for the past 12 days"),t.qZA())}function q(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",2)(1,"mat-card")(2,"mat-card-title"),t._uU(3),t.ALo(4,"async"),t.ALo(5,"async"),t.TgZ(6,"button",3),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.remove())}),t.ALo(7,"async"),t._UZ(8,"mat-icon",4),t.qZA()(),t.TgZ(9,"mat-card-subtitle"),t._uU(10),t.ALo(11,"async"),t.qZA(),t.TgZ(12,"mat-card-content"),t._UZ(13,"mat-divider",5),t.TgZ(14,"div",6),t.YNc(15,X,17,15,"div",7),t.ALo(16,"async"),t.YNc(17,z,2,0,"ng-template",null,8,t.W1O),t.TgZ(19,"div",9),t._UZ(20,"img",10),t.ALo(21,"async"),t.qZA()()(),t.TgZ(22,"mat-card-actions")(23,"button",11),t.ALo(24,"async"),t.ALo(25,"async"),t._uU(26," See game results >> "),t.qZA()()()()}if(2&n){const e=t.MAs(18),a=t.oxw();let s,i,l,d,g,U;t.xp6(3),t.AsE(" ",null==(s=t.lcZ(4,9,a.team$))?null:s.city," [",null==(s=t.lcZ(5,11,a.team$))?null:s.abbreviation,"] "),t.xp6(3),t.MGl("id","remove",null==(i=t.lcZ(7,13,a.team$))?null:i.abbreviation,""),t.xp6(4),t.hij("",null==(l=t.lcZ(11,15,a.team$))?null:l.conference,"ern Conference"),t.xp6(5),t.Q6J("ngIf",!(null==(d=t.lcZ(16,17,a.games$))||!d.length))("ngIfElse",e),t.xp6(5),t.Q6J("src",a.getIcon(t.lcZ(21,19,a.team$)),t.LSH),t.xp6(3),t.MGl("id","results",null==(g=t.lcZ(24,21,a.team$))?null:g.abbreviation,"")("routerLink","./results/",null==(U=t.lcZ(25,23,a.team$))?null:U.abbreviation,"")}}function V(n,o){}let tt=(()=>{class n{constructor(e,a){this.store=e,this.teamService=a,this.subscriptions=new v.w0}ngOnInit(){this.team$=this.store.getTeams().pipe((0,y.w)(e=>e),$(e=>e.id==this.teamId)),this.games$=this.store.getGames().pipe((0,T.U)(e=>e[this.teamId])),this.subscriptions.add(this.teamService.getGames(this.teamId).subscribe())}remove(){this.teamService.deleteTeamId(this.teamId)}getIcon(e){return`https://interstate21.com/nba-logos/${e.abbreviation}.png`}getScoreDiff(e){return this.isHomeTeam(e)?e.home_team_score-e.visitor_team_score:e.visitor_team_score-e.home_team_score}getGameResult(e){return this.getScoreDiff(e)>0?"W":this.getScoreDiff(e)<0?"L":"D"}getAvgPoints(e,a){let s=0;return e.forEach(i=>{this.isHomeTeam(i)?s+=a?i.home_team_score:i.visitor_team_score:s+=a?i.visitor_team_score:i.home_team_score}),s&&s/e.length}isHomeTeam(e){return this.teamId==e.home_team.id}ngOnDestroy(){this.subscriptions.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.y),t.Y36(I))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-team-card"]],inputs:{teamId:"teamId"},decls:5,vars:6,consts:[["class","pt-3",4,"ngIf","ngIfElse"],["loading",""],[1,"pt-3"],["mat-button","","color","primary","aria-label","Remove Team","title","Remove Team",2,"float","right",3,"id","click"],["fontIcon","close"],[1,"pb-3"],[1,"row"],["class","col-md-3 pb-3",4,"ngIf","ngIfElse"],["no_results",""],[1,"col-md-9"],[1,"icon",3,"src"],["mat-raised-button","","color","primary","aria-label","See game results","title","See game results",3,"id","routerLink"],[1,"col-md-3","pb-3"],[1,"pb-2"],[4,"ngFor","ngForOf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"dot","won"],[1,"dot","lost"],[1,"dot","draw"]],template:function(e,a){if(1&e&&(t.YNc(0,q,27,25,"div",0),t.ALo(1,"async"),t.ALo(2,"async"),t.YNc(3,V,0,0,"ng-template",null,1,t.W1O)),2&e){const s=t.MAs(4);t.Q6J("ngIf",t.lcZ(1,2,a.team$)&&t.lcZ(2,4,a.games$))("ngIfElse",s)}},dependencies:[c.sg,c.O5,c.RF,c.n9,c.ED,Z.lW,m.a8,m.dn,m.n5,m.$j,m.hq,L.d,P.Hw,u.rH,c.Ov,c.JJ],styles:['.icon[_ngcontent-%COMP%]{width:150px;height:150px}.dot[_ngcontent-%COMP%]{font-weight:700;color:#fff;height:25px;width:25px;border-radius:50%;display:inline-block;margin-right:5px;text-align:center}.won[_ngcontent-%COMP%]{background-color:#228b22}.won[_ngcontent-%COMP%]:after{content:"W"}.lost[_ngcontent-%COMP%]{background-color:#b22222}.lost[_ngcontent-%COMP%]:after{content:"L"}.draw[_ngcontent-%COMP%]{background-color:gray}.draw[_ngcontent-%COMP%]:after{content:"D"}'],changeDetection:0}),n})();const et=["formDirective"];function nt(n,o){if(1&n&&(t.TgZ(0,"mat-option",12),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.city," ")}}function at(n,o){if(1&n&&t._UZ(0,"app-team-card",14),2&n){const e=t.oxw().$implicit;t.Q6J("teamId",e)}}function ot(n,o){if(1&n&&(t.ynx(0),t.YNc(1,at,1,1,"app-team-card",13),t.BQk()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("ngIf",e)}}function st(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"div",2)(2,"form",3,4),t.NdJ("ngSubmit",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.submit())}),t.TgZ(4,"div",5)(5,"div")(6,"mat-form-field",6)(7,"mat-label"),t._uU(8,"Team"),t.qZA(),t.TgZ(9,"mat-select",7),t.YNc(10,nt,2,2,"mat-option",8),t.ALo(11,"async"),t.qZA()()(),t.TgZ(12,"div")(13,"button",9),t._uU(14,"Track Team"),t.qZA()()()(),t.TgZ(15,"div",10),t.YNc(16,ot,2,1,"ng-container",11),t.ALo(17,"async"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("formGroup",e.form),t.xp6(7),t.Q6J("required",!0),t.xp6(1),t.Q6J("ngForOf",t.lcZ(11,4,e.teams$)),t.xp6(6),t.Q6J("ngForOf",t.lcZ(17,6,e.teamIds$))}}function it(n,o){1&n&&t._UZ(0,"mat-spinner")}let rt=(()=>{class n{constructor(e,a,s){this.fb=e,this.store=a,this.teamService=s,this.subscriptions=new v.w0,this.form=this.fb.group({teamId:["",p.kI.required]})}ngOnInit(){this.teamIds$=this.teamService.readTeamIds(),this.teams$=this.store.getTeams(),this.subscriptions.add(this.teamService.getAllTeams().subscribe())}submit(){this.form.valid?(this.teamService.addTeamId(this.form.value.teamId),this.form.get("teamId")?.patchValue(""),this.formDirective.resetForm()):alert("Please select a team")}ngOnDestroy(){this.subscriptions.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.qu),t.Y36(f.y),t.Y36(I))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-team-tracking"]],viewQuery:function(e,a){if(1&e&&t.Gf(et,5),2&e){let s;t.iGM(s=t.CRH())&&(a.formDirective=s.first)}},decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["loading",""],[1,"container-fluid"],[1,"formGroup",3,"formGroup","ngSubmit"],["formDirective","ngForm"],[1,"row","pb-3"],["appearance","fill","floatLabel","always",1,"pr-2"],["id","teamSelect","formControlName","teamId","placeholder","Select a team",3,"required"],[3,"value",4,"ngFor","ngForOf"],["id","trackBtn","mat-raised-button","","color","primary","type","submit"],[1,"row"],[4,"ngFor","ngForOf"],[3,"value"],["class","col-md-6",3,"teamId",4,"ngIf"],[1,"col-md-6",3,"teamId"]],template:function(e,a){if(1&e&&(t.YNc(0,st,18,8,"div",0),t.ALo(1,"async"),t.YNc(2,it,1,0,"ng-template",null,1,t.W1O)),2&e){const s=t.MAs(3);let i;t.Q6J("ngIf",null==(i=t.lcZ(1,2,a.teams$))?null:i.length)("ngIfElse",s)}},dependencies:[c.sg,c.O5,p._Y,p.JJ,p.JL,p.Q7,p.sg,p.u,Z.lW,S.KE,S.hX,R.gD,k.ey,O.Ou,tt,c.Ov],changeDetection:0}),n})();var ct=r(5698);function mt(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div",2)(2,"b"),t._uU(3),t.qZA(),t._uU(4),t.TgZ(5,"b"),t._uU(6),t.qZA()(),t.BQk()),2&n){const e=o.$implicit;t.xp6(3),t.Oqu(e.home_team.abbreviation),t.xp6(1),t.AsE(" ",e.home_team_score," - ",e.visitor_team_score," "),t.xp6(2),t.Oqu(e.visitor_team.abbreviation)}}function lt(n,o){if(1&n&&(t.TgZ(0,"div")(1,"div",2),t._uU(2,"Scores of past 12 days:"),t.qZA(),t.YNc(3,mt,7,4,"ng-container",5),t.ALo(4,"async"),t.qZA()),2&n){const e=t.oxw(2);t.xp6(3),t.Q6J("ngForOf",t.lcZ(4,1,e.games$))}}function dt(n,o){1&n&&t._uU(0," No results for the past 12 days ")}function pt(n,o){if(1&n&&(t.TgZ(0,"div")(1,"mat-card")(2,"mat-card-title"),t._uU(3),t.ALo(4,"async"),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"mat-card-subtitle"),t._uU(7),t.ALo(8,"async"),t.qZA(),t.TgZ(9,"mat-card-content"),t._UZ(10,"mat-divider",2),t.YNc(11,lt,5,3,"div",0),t.ALo(12,"async"),t.YNc(13,dt,1,0,"ng-template",null,3,t.W1O),t.qZA(),t.TgZ(15,"mat-card-actions")(16,"button",4),t._uU(17," << Back to all team stats "),t.qZA()()()()),2&n){const e=t.MAs(14),a=t.oxw();let s,i,l;t.xp6(3),t.AsE(" ",null==(s=t.lcZ(4,5,a.team$))?null:s.city," [",null==(s=t.lcZ(5,7,a.team$))?null:s.abbreviation,"] "),t.xp6(4),t.hij("",null==(i=t.lcZ(8,9,a.team$))?null:i.conference,"ern Conference"),t.xp6(4),t.Q6J("ngIf",!(null==(l=t.lcZ(12,11,a.games$))||!l.length))("ngIfElse",e)}}function ut(n,o){1&n&&t._UZ(0,"mat-spinner")}const gt=[{path:"",component:rt},{path:"results/:teamCode",component:(()=>{class n{constructor(e,a,s,i){this.router=e,this.route=a,this.store=s,this.teamService=i,this.subscriptions=new v.w0}ngOnInit(){this.teamCode=`${this.route.snapshot.paramMap.get("teamCode")}`,this.team$=this.store.getTeams().pipe((0,y.w)(e=>e),$(e=>e.abbreviation==this.teamCode)),this.subscriptions.add(this.team$.subscribe(e=>{e&&(this.games$=this.store.getGames().pipe((0,T.U)(a=>a[e.id])),this.teamService.getGames(e.id).pipe((0,ct.q)(1)).subscribe())})),this.subscriptions.add(this.teamService.getAllTeams().subscribe())}ngOnDestroy(){this.subscriptions.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.F0),t.Y36(u.gz),t.Y36(f.y),t.Y36(I))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-team-results"]],decls:5,vars:6,consts:[[4,"ngIf","ngIfElse"],["loading",""],[1,"pb-3"],["no_results",""],["id","backBtn","mat-raised-button","","routerLink","/team-tracking","color","primary","aria-label","Back to all team stats","title","Back to all team stats"],[4,"ngFor","ngForOf"]],template:function(e,a){if(1&e&&(t.YNc(0,pt,18,13,"div",0),t.ALo(1,"async"),t.ALo(2,"async"),t.YNc(3,ut,1,0,"ng-template",null,1,t.W1O)),2&e){const s=t.MAs(4);t.Q6J("ngIf",t.lcZ(1,2,a.team$)&&t.lcZ(2,4,a.games$))("ngIfElse",s)}},dependencies:[c.sg,c.O5,Z.lW,m.a8,m.dn,m.n5,m.$j,m.hq,L.d,O.Ou,u.rH,c.Ov],changeDetection:0}),n})()}];let ft=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild(gt),u.Bz]}),n})();var ht=r(4466);let Tt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,ht.m,ft]}),n})()}}]);