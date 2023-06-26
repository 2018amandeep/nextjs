import React from 'react'

const dashboard = () => {
    return (
        <>
            <div>
                <section class="wrapper934">
                    {/* <section class="breadcrumb_sec">
                        <div class="wrapper934">
                            <ul>
                                <li class="sprite active"><a href="/AgentPortal/AgentDashboard">Dashboard</a> </li>
                            </ul>

                        </div>
                    </section> */}
                    <div class="claims_container mt10">
                        <div class="plan_news">
                            <div class="premium_calculator_sec">
                                <div class="contact_box_head_sec">
                                    <h2 class="f18_screen"><span>Alerts</span></h2>
                                </div>
                                <div class="aPortal_block gracePeriod_pad_Agent equal_height">
                                    <ul class="agentLogin_sec">
                                        <li><span class="t_center fst-line"><img src="/images/arrow_agent_login.gif" alt="Arrow Agent" width="4" height="7" /></span><span class="lst-line">Further Req./ Counter offer generated for policies</span><span class="t_center" id="spAgentCounter" runat="server">0</span></li>
                                        <li><span class="t_center"><img src="/images/arrow_agent_login.gif" alt="Arrow Agent" width="4" height="7" /></span><span>Policies in Grace period</span><span class="t_center" id="spAgentGrace" runat="server">0</span></li>
                                        <li><span class="t_center"><img src="/images/arrow_agent_login.gif" alt="Arrow Agent" width="4" height="7" /></span><span>Policies in NFO/Lapsed cases</span><span class="t_center" id="spAgentLapse" runat="server">0</span></li>
                                        <li><span class="t_center"><img src="/images/arrow_agent_login.gif" alt="Arrow Agent" width="4" height="7" /></span><span>Postpone / Decline cases</span><span class="t_center" id="spAgentChequeBounce" runat="server">0</span></li>
                                    </ul>
                                    <a href="AgentAlert" class="view_btn f_right mr14 mt7">View All</a> 
                                </div>
                            </div>
                            <div class="premium_calculator_sec bounced_cheques_right">
                                <div class="contact_box_head_sec">
                                    <h2 class="f18_screen"><span>new Business</span></h2>
                                </div>
                                <div class="aPortal_block gracePeriod_pad_Agent equal_height">
                                    <ul class="new_business_table_sec">
                                        <li class="heading bold"><span>&nbsp;</span><span>MTD</span><span>Financial YTD</span></li>
                                        <li><span>No. of paid cases</span><asp: Label ID="mtdpaid" runat="server" ></asp: Label><asp: Label ID="ytdpaid" runat="server"></asp: Label></li>
                                        <li><span>FYP(INR)</span><asp: Label ID="fypmtd" runat="server"></asp: Label><asp: Label ID="fypytd" runat="server"></asp: Label></li>
                                        <li><span>AFYP(INR)</span><asp: Label ID="afypmtd" runat="server"></asp: Label><asp: Label ID="afypytd" runat="server"></asp: Label></li>
                                    </ul>
                                    <p class="f_left f_details11">* as on <asp: Label ID="currentdate" runat="server"></asp: Label></p>
                                </div>
                            </div>
                            <div class="premium_calculator_sec mt7">
                                <div class="heading_sub_small">
                                    <h2 class="f18_screen"><span>Application Status</span></h2>
                                </div>
                                <div id="RemoveDiv" class="aPortal_block gracePeriod_pad_Agent table_equal_height3">

                                    <asp: GridView ID="grdApplicationStatus" runat="server" AllowPaging="true" PageSize="4" OnPageIndexChanging="grdApplicationStatus_PageIndexChanging" AutoGenerateColumns="False" BackColor="White" BorderColor="#D6D6D6" BorderStyle="Solid" BorderWidth="1px" CellPadding="4" Width="92%" style="margin-left: 16px">
                                        <Columns>
                                            <asp: BoundField DataField="APPLICATION_NO" HeaderText="Application No." />
                                            <asp: BoundField DataField="PH_NAME" HeaderText="Customer Name" />
                                            <asp: BoundField DataField="APPLICATION_STATUS" HeaderText="Status" />
                                        </Columns>
                                        <FooterStyle BackColor="#D6D6D6" ForeColor="#003399" />
                                        <HeaderStyle BackColor="#D6D6D6" Font-Bold="True" ForeColor="Black" Font-Size="X-Small" />
                                        <PagerStyle BackColor="#D6D6D6" ForeColor="#003399" HorizontalAlign="Left" Font-Size="X-Small" />
                                        <RowStyle BackColor="White" ForeColor="#4a4a4e" Font-Size="X-Small" />
                                        <SelectedRowStyle BackColor="#009999" Font-Bold="True" ForeColor="#CCFF99" />
                                        <SortedAscendingCellStyle BackColor="#EDF6F6" />
                                        <SortedAscendingHeaderStyle BackColor="#0D4AC4" />
                                        <SortedDescendingCellStyle BackColor="#D6DFDF" />
                                        <SortedDescendingHeaderStyle BackColor="#002876" />
                                    </asp: GridView>
                                </div>
                            </div>
                            <div class="premium_calculator_sec bounced_cheques_right mt7">
                                <div class="heading_sub_small">
                                    <h2 class="f18_screen"><span>bulletin board</span></h2>
                                </div>
                                <div class="aPortal_block gracePeriod_pad_Agent table_equal_height3">

                                    <div class="claims_container mt10">
                                        <div class="services_container">

                                            <asp: Label ID="Label1" runat="server" ></asp: Label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="claims_container">
                                <div class="services_container">
                                    <div>
                                        <div class="premium_calculator_sec mt7">
                                            <div class="heading_sub_small">
                                                <h2 class="f18_screen">
                                                    <span>Important Links&nbsp;</span></h2>
                                            </div>
                                            <div class="aPortal_block gracePeriod_pad table_equal_height5">
                                                <ul class="imp_links">
                                                    <li class="sprite">
                                                        <a href="https://www.dpliguruonline.com/frmLogin.aspx" target="_blank">Guru Online</a></li>
                                                    <li class="sprite">
                                                        <a href="https://idecimalclouddev.pramericalife.in/#/" target="_blank">Decimal</a></li>
                                                    <li class="sprite">
                                                        <a href="/UserFiles/File/16987_singh2m1_22102012_15-26_FAQs.pdf" target="_blank">Faq&rsquo;s</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="premium_calculator_sec bounced_cheques_right mt7">
                                            <div class="heading_sub_small">
                                                <h2 class="f18_screen">
                                                    <span>Downloads</span></h2>
                                            </div>
                                            <div class="aPortal_block gracePeriod_pad table_equal_height5">
                                                <asp: DropDownList runat="server" ID="ddlDownload" class="selectForm slc">
                                                    <asp: ListItem Text="Application Form" Value="Application Form" />
                                                    <asp: ListItem Text="Proposal Forms" Value="Proposal Forms" />
                                                </asp: DropDownList>
                                                <asp: Button Text="Submit" runat="server" class="button_red_input19 ml10 m_110" name="Submit" OnClick="btnDowload_Click" value="Submit" />
                                                {/* <%--			<select class="selectForm slc" name=""><option>Application Form</option><option>Proposal Forms</option></select> <a href="/UserFiles/File/AF form.pdf" target="_blank"><input class="button_red_input19 ml10 m_110" name="" type="button" value="Submit" /> </a></div>--%>
                                            <%--<asp: Label ID="lblContent" runat="server"></asp: Label>--%> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="premium_calculator_sec b_day_week mt7">
                                    <div class="heading_sub_small">
                                        <h2 class="f18_screen"><span>Birthdays this Week</span></h2>
                                    </div>
                                    <div class="aPortal_block gracePeriod_pad_Agent table_equal_height4">
                                        <marquee onMouseOver="this.setAttribute('scrollamount', 0, 0);" OnMouseOut="this.setAttribute('scrollamount', 6, 0);" behavior="scroll" direction="left" scrolldelay="150">
                                            <ul class="birthday_week">
                                                <asp: Repeater ID="rptAgentBirthday" runat="server">
                                                    <ItemTemplate>
                                                        {/* <li><%#Eval("CUSTOMER_NAME") %>  <span class="red"><%#Eval("DOB", "{0:dd/MMM/yyyy}") %></span></li> */}
                                                    </ItemTemplate>
                                                </asp: Repeater>
                                            </ul></marquee>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div id="agentpop" style="display:none;" class="fancybox34" >
                            <div class="premium_popup_main" style="font-size:12px;padding:20px; color:#2f598a; font-size:15px;">
                                {/* <asp: Label ID="lblPoppupmessage" runat="server" Text="Label"></asp: Label> */}
                                <div class="premium_btn_sec" style="margin-top:12px;">
                                    <div class="premium_sub_sec t_center">

                                        <a id="lnkpaypremium" runat="server" clientidmode="Static" href="/AgentPOrtal/PolicyDetailsLA" target="_self" onclick="Open(this);">
                                            <asp: Image ID="Img_Pay_premium" runat="server" ImageUrl="/library/images/Continue.png" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* <style>
    .fancybox-inner{height:auto!important;}
    </style> */}
            </div>


        </>
    )
}

export default dashboard;