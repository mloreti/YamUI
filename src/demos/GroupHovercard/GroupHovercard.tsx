/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Avatar, { AvatarBorderType, AvatarSize } from '../../components/Avatar';
import Block, { GutterSize, TextSize } from '../../components/Block';
import Button, { ButtonColor } from '../../components/Button';
import { HovercardHeader, HovercardBody } from '../../components/Hovercard';
import FakeLink from '../../components/FakeLink';
import { FixedGridRow, FixedGridColumn } from '../../components/FixedGrid';
import { LayoutList, LayoutListItem } from '../../components/LayoutList';
import { IconSize } from '../../components/Icon';
import Add from '../../components/Icon/icons/Add';
import Group from '../../components/Icon/icons/Group';
import Lock from '../../components/Icon/icons/Lock';
import MediaObject, { MediaObjectSize } from '../../components/MediaObject';

const iconGroup = <Group size={IconSize.MEDIUM} block={true} color="#a8b0bd" />;
const iconPrivate = <Lock size={IconSize.XSMALL} color="#a8b0bd" />;

const memberImage = 'user.png';
const memberAvatar1 = <Avatar imageUrl={memberImage} name="Annie Antelope" size={AvatarSize.XSMALL} />;
const memberAvatar2 = <Avatar imageUrl={memberImage} name="Bobby Baboon" size={AvatarSize.XSMALL} />;
const memberAvatar3 = <Avatar imageUrl={memberImage} name="Charles Caribou" size={AvatarSize.XSMALL} />;
const memberAvatar4 = <Avatar imageUrl={memberImage} name="Daniel Dingo" size={AvatarSize.XSMALL} />;
const memberAvatar5 = <Avatar imageUrl={memberImage} name="Eleanor Elephant" size={AvatarSize.XSMALL} />;
const relatedGroups = (
  <span>
    Related groups: <FakeLink>Frontend Team</FakeLink>, <FakeLink>Engineering Team</FakeLink>,{' '}
    <FakeLink>Yammer Team</FakeLink>, and <FakeLink>Performance Domain</FakeLink>
  </span>
);

export interface GroupHovercardProps {
  group: any;
}

export default class GroupHovercard extends React.Component<GroupHovercardProps> {
  public render() {
    const { group } = this.props;

    const groupAvatar = (
      <Avatar imageUrl={group.imageUrl} name={group.name} size={AvatarSize.LARGE} borderType={AvatarBorderType.SOFT} />
    );

    const groupMetadata = (
      <span>
        {iconPrivate} {group.privacy}
      </span>
    );

    return (
      <div>
        <HovercardHeader>
          <MediaObject
            size={MediaObjectSize.LARGE}
            imageContent={groupAvatar}
            titleContent={group.name}
            metadataContent={groupMetadata}
          />
        </HovercardHeader>
        <HovercardBody>
          <Block textSize={TextSize.MEDIUM_SUB}>
            <Block bottomSpacing={GutterSize.MEDIUM} push={1}>
              {group.description}
            </Block>

            <Block bottomSpacing={GutterSize.LARGE}>
              <Block bottomSpacing={GutterSize.XSMALL}>102 members</Block>
              <LayoutList direction="horizontal">
                <LayoutListItem>{memberAvatar1}</LayoutListItem>
                <LayoutListItem>{memberAvatar2}</LayoutListItem>
                <LayoutListItem>{memberAvatar3}</LayoutListItem>
                <LayoutListItem>{memberAvatar4}</LayoutListItem>
                <LayoutListItem>{memberAvatar5}</LayoutListItem>
              </LayoutList>
            </Block>

            <FixedGridRow bottomSpacing={GutterSize.XXLARGE} gutterSize={GutterSize.SMALL}>
              <FixedGridColumn fixed={true}>{iconGroup}</FixedGridColumn>
              <FixedGridColumn>{relatedGroups}</FixedGridColumn>
            </FixedGridRow>

            <Block textAlign="right">
              <Button text="Join" color={ButtonColor.PRIMARY} icon={Add} />
            </Block>
          </Block>
        </HovercardBody>
      </div>
    );
  }
}
